<script setup lang="ts">
import { recordList } from '@/config/index';
const canvas = ref<HTMLCanvasElement | null>(null);
const effectCanvas = ref<HTMLCanvasElement | null>(null);
const ctx = ref<CanvasRenderingContext2D | null>(null);
const loveList = ref<Array<{x: number; y: number;}>>([]);
const index = ref<number>(0);
const opacity = ref<number>(0);
const day = ref<number>(0);
const hour = ref<string>('');
const minute = ref<string>('');
const second = ref<string>('');

const togatherTime = new Date('2021/09/15 12:40:00');

const width = 800;
const height = 1200;
const DAY = (24 * 3600 * 1000),
    HOUR = 3600 * 1000,
    MINUTE = 60 * 1000,
    SECOND = 1000;

const getDays = () => {
    const delta = +new Date() - togatherTime;
    const days = Math.floor(delta / DAY);
    const hours = Math.floor(delta % DAY / HOUR);
    const minutes = Math.floor(delta % HOUR / MINUTE);
    const seconds = Math.floor((delta - days * DAY - hours * HOUR - minutes * MINUTE) / 1000);

    day.value = days;
    hour.value = hours.toString().padStart(2, '0');
    minute.value = minutes.toString().padStart(2, '0');
    second.value = seconds.toString().padStart(2, '0');

    setTimeout(() => {
        getDays();
    }, 1000);
}

const caculateImage = (w: number, h: number) => {
    let dw: number = 0;
    let dh: number = 0;
    let dx: number = 0;
    let dy: number = 0;

    const ratio = Math.max(width / w, height / h);

    dw = w * ratio;
    dh = h * ratio;
    dx = (width - dw) / 2;
    dy = (height - dh) / 2;

    return {
        dw,
        dh,
        dx,
        dy,
    };
}

const drawImage = () => {
    if (recordList.length > 0) {
        const img = new Image();
        img.src = recordList[index.value];
        img.onload = () => {
            const { dw, dh, dx, dy } = caculateImage(img.width, img.height);
            ctx.value.clearRect(0, 0, width, height);
            ctx.value.drawImage(img, dx, dy, dw, dh);
            if (index.value < recordList.length - 1) {
                index.value++;
            } else {
                index.value = 0;
            }
            setTimeout(() => {
                drawImage();
            }, 3000);
        };
    }
};

const resetLoveList = () => {
    loveList.value = new Array(8).fill(0).map(item => ({
        x: width / 2 - Math.random() * width,
        y: height / 2 - Math.random() * height,
    }));
};

const drawOneLove = (dx: number, dy: number) => {
    const ctx = effectCanvas.value.getContext("2d");
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = `rgba(247, 200, 207, ${opacity.value})`;
    ctx.translate(width / 2 - dx, height / 2 - dy);
    ctx.scale(opacity.value, -1 * opacity.value);
    ctx.moveTo(0, 0);
    let angle = 0, x = 0, y = 0, a = 6;
    for (let i = 0; i < 30; i += 0.2) {
        angle = i / Math.PI;
        x = a * (16 * Math.sin(angle) ** 3);
        y = a * (13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle));
        ctx.lineTo(x, y);
    }
    ctx.fill();
    ctx.closePath();
    ctx.restore();
};

const drawLove = () => {
    const ctx = effectCanvas.value.getContext("2d");
    ctx.clearRect(0, 0, width, height);
    loveList.value.map(item => drawOneLove(item.x, item.y));
    setTimeout(() => {
        if (opacity.value < 0.8) {
            opacity.value += 0.1;
        } else {
            opacity.value = 0;
            resetLoveList();
        }
        drawLove();
    }, 100);
};

const drawText = () => {
    ctx.value.font = "30px Arial";
    ctx.value.fillStyle = "#fff";
    ctx.value.textAlign = "center";
};

onMounted(() => {
    if (canvas.value) {
        canvas.value.width = width;
        canvas.value.height = height;
        ctx.value = canvas.value.getContext("2d");
        drawImage();
        getDays();
    }

    if (effectCanvas.value) {
        effectCanvas.value.width = width;
        effectCanvas.value.height = height;
        resetLoveList();
        drawLove();
    }
});
</script>

<template>
    <main class="container">
        <canvas ref="canvas">你的浏览器不支持canvas</canvas>
        <canvas ref="effectCanvas" class="effect-canvas">你的浏览器不支持canvas</canvas>
        <div class="masking">
            <p>相爱<span class="day" id="day">{{ day }}</span>天</p>
            <p>愿余生都可四目相对</p>
            <p>余生只有彼此</p>
            <p class="min">
                (<span class="hour" id="hour">{{ hour }}</span>小时
                <span class="minute" id="minute">{{ minute }}</span>分钟
                <span class="second" id="second">{{ second }}</span>秒)
            </p>
        </div>
    </main>
</template>

<style lang="less" scoped>
.container {
    position: relative;

    @keyframes blink {

        0%,
        20%,
        40%,
        60%,
        80%,
        100% {
            opacity: 1;
        }

        10%,
        30%,
        50%,
        70%,
        90% {
            opacity: 0.5;
        }
    }

    @keyframes bounce {

        0%,
        20%,
        40%,
        60%,
        80%,
        100% {
            transform: translateY(0);
        }

        10%,
        30%,
        50%,
        70%,
        90% {
            transform: translateY(-5px);
        }
    }

    canvas {
        width: 400px;
        height: 600px;
        margin: 0 auto;
    }

    .effect-canvas {
        position: absolute;
        top: 0;
        left: 0;
    }

    .masking {
        position: absolute;
        top: 6.64rem;
        left: 0;
        width: 100%;
        z-index: 1000;
        height: 10.2rem;
        text-align: center;
        color: #fff;
        font-size: 1.6rem;
        line-height: 1.4;
        background: linear-gradient(to right, rgba(0, 20, 56, 0) 5%, rgba(0, 20, 56, 0.2) 70%, rgba(0, 20, 56, 0));
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        letter-spacing: 0.15rem;


        .day {
            color: #ffc5d0;
            font-weight: 500;
            animation: blink 5s infinite;
        }

        .min {
            font-size: 1.2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #f8f8f8;
        }

        .second {
            animation: bounce 5s infinite;
        }

        .hour,
        .minute,
        .second {
            font-weight: 500;
            color: #ffc5d0;
        }
    }
}
</style>