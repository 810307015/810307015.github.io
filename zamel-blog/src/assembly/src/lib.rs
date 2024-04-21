use wasm_bindgen::prelude::*;
use std::io::Cursor;
use image::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, assembly!");
}

pub fn get_image_bytes(img: DynamicImage) -> Vec<u8> {
    let mut bytes: Vec<u8> = Vec::new();
    img.write_to(&mut Cursor::new(&mut bytes), image::ImageFormat::Png)
        .unwrap();
    return bytes;
}


#[wasm_bindgen(js_name = "cropImage")]
pub fn crop_image(data: &[u8], cols: u32, rows: u32) -> JsValue {
    let mut img = image::load_from_memory(data).unwrap();
    
    let (w, h) = img.dimensions();

    let mut list: Vec<Vec<u8>> = vec![];
    let dw = w / cols;
    let dh = h / rows;
    for i in 0..rows {
        for j in 0..cols {
            let x = (w / cols) * j;
            let y = (h / rows) * i;
            let _img = img.crop(x, y, dw, dh);
            list.push(get_image_bytes(_img));
        }
    }
    
    return serde_wasm_bindgen::to_value(&list).unwrap();
}


#[wasm_bindgen(js_name = "cropImageBySize")]
pub fn crop_image_by_size(data: &[u8], x: u32, y: u32, dw: u32, dh: u32) -> Vec<u8> {
    let mut img = image::load_from_memory(data).unwrap();
    
    let _img = img.crop(x, y, dw, dh);
    
    return get_image_bytes(_img);
}

/**
 * 计算二值化的阈值，采用otsu算法，获取最大方差时的阈值
 */
pub fn get_threshold(img: DynamicImage) -> u8 {
    let (width, height) = img.dimensions();
    let mut max: f32 = 0.0;
    let mut rgb: usize = 0;
    let mut arr: [usize; 256] = [0; 256];
    for x in 0..width {
        for y in 0..height {
            let r = img.get_pixel(x, y).0[0] as usize;
            arr[r] = arr[r] + 1;
        }
    }
    for _c in 0..=255 as usize {
        // 阈值以下的像素个数
        let mut n = 0;
        // 阈值以下的像素总数
        let mut n_r = 0;
        // 阈值及以上的像素个数
        let mut m = 0;
        // 阈值及以上的像素总数
        let mut m_r = 0;
        for (index, c) in arr.iter().enumerate() {
            if _c < index {
                n += c;
                n_r += index * (*c as usize);
            } else {
                m += c;
                m_r += index * (*c as usize);
            }
        }
        let u0 = if n == 0 {
            0
        } else {
            n_r / n as usize
        };
        let u1 = if m == 0 {
            0
        } else {
            m_r / m as usize
        };
        let u = if u0 > u1 {
            u0 - u1
        } else {
            u1 - u0
        };
        let w0 = n as f32 / (width * height) as f32;
        let w1 = m as f32 / (width * height) as f32;
        let maxinum: f32 = w0 * w1 * u.pow(2) as f32;
        if max < maxinum {
            max = maxinum;
            rgb = _c;
        }
    }
    rgb as u8
}

/**
 * sobel边缘检测
 * [[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]] Gx
 * [[1, 2, 1], [0, 0, 0], [-1, -2, -1]] Gy
 * <0 = 0    >255 = 255
 */
pub fn sobel_edge_detection(img: DynamicImage) -> DynamicImage {
    let (width, height) = img.dimensions();
    let mut _img = img.clone();
    let threshold = get_threshold(img.clone()) as u32;
    for x in 1..width-1 {
        for y in 1..height-1 {
            // 水平方向的梯度
            let c1 = img.get_pixel(x + 1, y - 1).0[0] as u32;
            let c2 = img.get_pixel(x + 1, y).0[0] as u32 * 2;
            let c3 = img.get_pixel(x + 1, y + 1).0[0] as u32;
            let c4 = img.get_pixel(x - 1, y - 1).0[0] as u32;
            let c5 = img.get_pixel(x - 1, y).0[0] as u32 * 2;
            let c6 = img.get_pixel(x - 1, y + 1).0[0] as u32;

            let mut Gx = 0;
            if (c1 + c2 + c3 < c4 + c5 + c6) {
                Gx = 0;
            } else if (c1 + c2 + c3 > c4 + c5 + c6 + 255) {
                Gx = 255;
            } else {
                Gx = c1 + c2 + c3 - c4 - c5 - c6;
            }
        
            // 垂直方向上的梯度
            let c1 = img.get_pixel(x - 1, y - 1).0[0] as u32;
            let c2 = img.get_pixel(x, y - 1).0[0] as u32 * 2;
            let c3 = img.get_pixel(x + 1, y - 1).0[0] as u32;
            let c4 = img.get_pixel(x - 1, y + 1).0[0] as u32;
            let c5 = img.get_pixel(x, y + 1).0[0] as u32 * 2;
            let c6 = img.get_pixel(x + 1, y + 1).0[0] as u32;

            let mut Gy = 0;
            if (c1 + c2 + c3 < c4 + c5 + c6) {
                Gy = 0;
            } else if (c1 + c2 + c3 > c4 + c5 + c6 + 255) {
                Gy = 255;
            } else {
                Gy = c1 + c2 + c3 - c4 - c5 - c6;
            }

            let mut s = Gx + Gy;

            // 目前的阈值，可以使用Otsu 算法(大津算法)等来确定阈值
            if s < threshold {
                s = 0;
                _img.put_pixel(x, y, Rgba([255, 255, 255, 0]));
            } else {
                s = 255;
                
            }
        }
    }

    _img
}

#[wasm_bindgen(js_name = "cutImage")]
pub fn cut_image(data: &[u8], x: u32, y: u32, dw: u32, dh: u32) -> Vec<u8> {
    let mut img = image::load_from_memory(data).unwrap();
    
    let _img = sobel_edge_detection(img);
    
    return get_image_bytes(_img);
}

pub enum Operation {
    Add,
    Subtract,
    Multiply,
    Divide
}

pub fn caculate_number(a: &str, b: &str, operation: Operation) -> String {
    let mut result = String::from("");
    match operation {
        Operation::Add => {
            let _a: u128 = a.parse().unwrap();
            let _b: u128 = b.parse().unwrap();
            let _c = _a + _b;
            result = _c.to_string();
        }
        Operation::Subtract => {
            let _a: u128 = a.parse().unwrap();
            let _b: u128 = b.parse().unwrap();
            let _c = _a - _b;
            result = _c.to_string();
        }
        Operation::Multiply => {
            let _a: u128 = a.parse().unwrap();
            let _b: u128 = b.parse().unwrap();
            let _c = _a * _b;
            result = _c.to_string();
        }
        Operation::Divide => {
            let _a: f64 = a.parse().unwrap();
            let _b: f64 = b.parse().unwrap();
            let _c = _a / _b;
            result = _c.to_string();
        }
    }
    result
}

#[wasm_bindgen(js_name = "add")]
pub fn add(a: &str, b: &str) -> String {
    return caculate_number(a, b, Operation::Add);
}

#[wasm_bindgen(js_name = "subtract")]
pub fn subtract(a: &str, b: &str) -> String {
    return caculate_number(a, b, Operation::Subtract);
}

#[wasm_bindgen(js_name = "multiply")]
pub fn multiply(a: &str, b: &str) -> String {
    return caculate_number(a, b, Operation::Multiply);
}

#[wasm_bindgen(js_name = "divide")]
pub fn divide(a: &str, b: &str) -> String {
    return caculate_number(a, b, Operation::Divide);
}