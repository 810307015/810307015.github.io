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