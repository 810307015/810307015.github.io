<script lang="ts" setup>
import type { UploadFile } from 'element-plus';
import { cropImageBySize } from '@/assembly/pkg/assembly';
import { ElLoading } from 'element-plus';

const upload = ref<ElUpload | null>(null);
const image = ref<string>('');
const cropImage = ref<string>('');
const imageData = ref<ArrayBuffer | null>(null);
const cropWidth = ref<number>(50);
const cropHeight = ref<number>(50);
const ratio = ref<number>(1);
const maxCropWidth = ref<number>(100);
const maxCropHeight = ref<number>(100);
const top = ref<number>(0);
const left = ref<number>(0);
const lastTop = ref<number>(0);
const lastLeft = ref<number>(0);
const startX = ref<number>(0);
const startY = ref<number>(0);
const boxWidth = ref<number>(500);

const changeHandler = (file: UploadFile) => {
    const raw = file.raw!;
    image.value = URL.createObjectURL(raw);
    const img = new Image();
    img.src = image.value;
    img.onload = () => {
        boxWidth.value = Math.min.call(null, img.width, 500, document.body.clientWidth); // 比500小就用自身的尺寸，不然就用500
        console.log(img.width, img.height);
        ratio.value = boxWidth.value / img.width;
        maxCropWidth.value = img.width * ratio.value;
        maxCropHeight.value = img.height * ratio.value;
    };
    raw.arrayBuffer().then((buffer: ArrayBuffer) => {
        imageData.value = buffer;
    });
};

const reset = () => {
    imageList.value = [];
    upload.value.clearFiles();
};

const downloadAll = () => {
    imageList.value.forEach((image, index) => {
        const link = document.createElement('a');
        link.href = image;
        link.download = `crop-${index + 1}`;
        link.click();
    });
};

const onDragStart = (e: DragEvent) => {
    startX.value = e.clientX;
    startY.value = e.clientY;
};

const onDrag = (e: DragEvent) => {
    if (e.clientX && e.clientY) {
        const deltaX = e.clientX - startX.value;
        const deltaY = e.clientY - startY.value;
        if (
            lastTop.value + deltaY + cropHeight.value <= 500
            && lastLeft.value + deltaX + cropWidth.value <= 500
            && lastTop.value + deltaY >= 0
            && lastLeft.value + deltaX >= 0
            ) {
            top.value = lastTop.value + deltaY;
            left.value = lastLeft.value + deltaX;
        }
    }
};

const onDragEnd = (e: DragEvent) => {
    lastTop.value = top.value;
    lastLeft.value = left.value;
};

const onDragOver = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
};

const onTouchStart = (e: TouchEvent) => {
    const { clientX, clientY } = e.touches[0];
    startX.value = clientX;
    startY.value = clientY;
};

const onTouchMove = (e: TouchEvent) => {
    if (e.touches.length) {
        const { clientX, clientY } = e.touches[0];
        const deltaX = clientX - startX.value;
        const deltaY = clientY - startY.value;
        if (
            lastTop.value + deltaY + cropHeight.value <= 500
            && lastLeft.value + deltaX + cropWidth.value <= 500
            && lastTop.value + deltaY >= 0
            && lastLeft.value + deltaX >= 0
            ) {
            top.value = lastTop.value + deltaY;
            left.value = lastLeft.value + deltaX;
        }
    }
};

const onTouchEnd = (e: TouchEvent) => {
    lastTop.value = top.value;
    lastLeft.value = left.value;
};

const crop = () => {
    const loadingInstance = ElLoading.service({
        fullscreen: true,
        text: '裁剪中...'
    });
    const list: Uni8Array = cropImageBySize(
        new Uint8Array(imageData.value),
        Math.floor(left.value / ratio.value),
        Math.floor(top.value / ratio.value),
        Math.floor(cropWidth.value / ratio.value),
        Math.floor(cropHeight.value / ratio.value)
    );
    const blob = new Blob([new Uint8Array(list)], { type: 'image/png' });
    cropImage.value = URL.createObjectURL(blob);
    nextTick(() => {
        loadingInstance.close();
    });
};

</script>

<template>
    <main>
        <div class="header">使用rust的image包进行图片裁剪然后通过webassembly进行调用，自选尺寸后移动裁剪框进行进行裁剪</div>
        <el-space v-if="image" style="margin-bottom: 10px;">
            <div style="padding: 20px">
                <span>裁剪框的宽度：</span>
                <el-slider v-model="cropWidth" :min="50" :max="maxCropWidth" />
            </div>
            <div style="padding: 20px">
                <span>裁剪框的高度：</span>
                <el-slider v-model="cropHeight" :min="50" :max="maxCropHeight" />
            </div>
        </el-space>
        <ElUpload
            ref="upload"
            action="#"
            :list-type="'picture'"
            :auto-upload="false"
            :limit="1"
            @change="changeHandler"
        >
            <el-button>上传</el-button>
            <el-button @click.stop="reset">重置</el-button>
            <el-button v-if="image" @click.stop="crop">裁剪</el-button>
        </ElUpload>
        

        <div v-if="image" class="image-box">
            <el-image
                :style="{
                    width: `${boxWidth.value}px`,
                }"
                :src="image"
                fit="full"
            />
            <div
                class="crop-box"
                :style="{
                    width: `${cropWidth}px`,
                    height: `${cropHeight}px`,
                    top: `${top}px`,
                    left: `${left}px`
                }"
                draggable="true"
                @dragstart="onDragStart"
                @drag="onDrag"
                @dragend="onDragEnd"
                @dragover="onDragOver"
                @touchstart="onTouchStart"
                @touchmove="onTouchMove"
                @touchend="onTouchEnd"
            >
            </div>
        </div>

        <div v-if="cropImage" class="image-box">
            <el-image
                :src="cropImage"
                :style="{
                    width: `${maxCropWidth.value}px`,
                }"
                fit="full"
            />
        </div>
    </main>
</template>

<style lang="less" scoped>
.header {
    margin-bottom: 10px;
}
.image-box {
    position: relative;
    width: 500px;
    overflow: hidden;
    .el-image {
        pointer-events: none;
    }
    .crop-box {
        position: absolute;
        top: 0;
        left: 0;
        border: 2px solid #333;
        background: rgba(0, 0, 0, .3);
        cursor: move;
        z-index: 10;
        box-sizing: border-box;
    }
}
</style>
