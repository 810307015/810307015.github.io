<script lang="ts" setup>
import { ref } from 'vue';
import { useRecordAudioFunc, AudioPlayer } from '@/lib/record';
const audioFile = ref<File>();
const audioPlayer = ref<AudioPlayer>();
const recording = ref<boolean>(false);
const audioRef = ref<HTMLAudioElement>();
const { start, stop, cancel } = useRecordAudioFunc({
    onEnd: (file) => {
        audioFile.value = file;
        audioRef.value.src = URL.createObjectURL(file);
    },
});

const play = () => {
    if (!audioFile.value) return;
    audioFile.value.arrayBuffer().then((arrayBuffer) => {
        audioPlayer.value = new AudioPlayer({
            arrayBuffer,
            rate: 1,
            onEnd: () => {
                console.log('播放结束');
            },
            onReady: () => {
                audioPlayer.value.start();
            }
        });
    });
}
const onStart = () => {
    recording.value = true;
    audioFile.value = undefined;
    start();
}
const onStop = () => {
    recording.value = false;
    stop();
}
</script>
<template>
    <el-space direction="vertical" size="15">
        <h1>Audio Record & Play</h1>
        <el-space>
            <el-button @click="onStart" :disabled="recording">Start Record</el-button>
            <el-button @click="onStop" :disabled="!recording">End Record</el-button>
            <el-button @click="play" :disabled="!audioFile">Play Audio Without Html Audio Tag</el-button>
        </el-space>
        <div v-if="audioFile">
            <span>文件名：{{ audioFile?.name }}</span>
            <span>文件大小：{{ audioFile?.size }}B</span>
        </div>
        <div>
            <audio ref="audioRef" controls></audio>
        </div>
    </el-space>
</template>