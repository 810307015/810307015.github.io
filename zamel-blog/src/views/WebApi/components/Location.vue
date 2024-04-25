<script setup lang="ts">
const location = ref<{
    latitude: number;
    longitude: number;
}>({});
const getLocation = () => {
    const loadingInstance = ElLoading.service({
        fullscreen: true,
        text: '获取位置信息中...'
    });
    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        location.value = { latitude, longitude };
        loadingInstance.close();
    }, err => {
        loadingInstance.close();
        ElMessage.error(err);
    });
};
</script>

<template>
    <div>
        <el-button type="primary" @click="getLocation">获取当前位置</el-button>
        <div v-if="location.longitude && location.latitude">你的位置：经度 {{ location.longitude }} ，纬度 {{ location.latitude }}</div>
    </div>
</template>