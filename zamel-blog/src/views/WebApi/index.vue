<script setup lang="ts">
import Notification from './components/Notification.vue';
import Photo from './components/Photo.vue';
import Record from './components/Record.vue';

const activeName = ref<string>('notification');

const handleClick = (tab: TabsPaneContext) => {
    activeName.name = tab.props.name;
};
</script>

<template>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="网页通知" name="notification">
            <Notification />
        </el-tab-pane>
        <el-tab-pane label="摄像头获取" name="photo">
            <Photo />
        </el-tab-pane>
        <el-tab-pane label="录音" name="record">
            <Record />
        </el-tab-pane>
    </el-tabs>
</template>
