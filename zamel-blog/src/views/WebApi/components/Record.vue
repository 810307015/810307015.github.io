<script setup lang="ts">
const streamRef = ref<MediaStream | null>(null);
const mediaRecorder = ref<MediaRecorder | null>(null);
const chunks = ref<Blob[]>([]);
const audio = ref<HTMLAudioElement | null>(null);
const show = ref<boolean>(false);

const startRecord = () => {
    show.value = false;
    navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
            streamRef.value = stream;
            mediaRecorder.value = new MediaRecorder(stream);
            console.log(mediaRecorder.value);
            mediaRecorder.value.ondataavailable = (e) => {
                chunks.value.push(e.data);
            };
            mediaRecorder.value.onstop = (e) => {
                if (chunks.value.length > 0) {
                    const blob = new Blob(chunks.value, { type: "audio/ogg; codecs=opus" });
                    audio.value.src = URL.createObjectURL(blob);
                    audio.value.play();
                    show.value = true;
                } else {
                    ElMessage.error('没有捕获到音频数据');
                }
            }
            mediaRecorder.value.start();
        })
        .catch((err) => {
            ElMessage.error('获取摄像头失败');
        });
};


const endRecord = () => {
    if (streamRef.value) {
        mediaRecorder.value?.stop();
        const tracks = streamRef.value.getTracks();
        tracks.forEach((track) => {
            track.stop();
        });
    }
};
</script>

<template>
    <el-space direction="vertical" size="middle" alignment="flex-start">
        <el-space size="middle">
            <el-button @click="startRecord">开始录音</el-button>
            <el-button @click="endRecord">结束录音</el-button>
        </el-space>
        <el-space size="middle">
            <audio ref="audio" controls :disable="show"></audio>
        </el-space>
    </el-space>
</template>
<style lang="less" scoped>
audio {
    width: 300px;
    height: 30px;
}
</style>
