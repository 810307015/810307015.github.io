<script setup lang="ts">
import { recordList } from '@/config/index';
const canvas = ref<HTMLCanvasElement | null>(null);
const ctx = ref<CanvasRenderingContext2D | null>(null);
const index = ref<number>(0);
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
});
</script>

<template>
    <main class="container">
        <canvas ref="canvas">你的浏览器不支持canvas</canvas>
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