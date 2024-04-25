<script setup lang="ts">
const video = ref<HTMLVideoElement | null>(null);
const image = ref<string>('');
const streamRef = ref<MediaStream | null>(null);

const startPhoto = () => {
    navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then((stream) => {
            streamRef.value = stream;
            video.value.srcObject = stream;
            video.value.play();
        })
        .catch((err) => {
            ElMessage.error('获取摄像头失败');
        });
};

const takePhoto = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 500;
    canvas.height = 500;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video.value, 0, 0, canvas.width, canvas.height);
    image.value = canvas.toDataURL('image/png');
};


const endPhoto = () => {
    if (streamRef.value) {
        const tracks = streamRef.value.getTracks();
        tracks.forEach((track) => {
            track.stop();
        });
    }
};
</script>

<template>
    <el-space direction="vertical" size="large" alignment="flex-start">
        <el-space size="large">
            <el-button @click="startPhoto">开始打开摄像头</el-button>
            <el-button @click="takePhoto">拍照</el-button>
            <el-button @click="endPhoto">关闭摄像头</el-button>
        </el-space>
        <el-image v-if="image" :src="image" alt="" />
        <video ref="video"></video>
    </el-space>
</template>
<style lang="less" scoped>
video {
    width: 500px;
    height: 500px;
}
</style>
