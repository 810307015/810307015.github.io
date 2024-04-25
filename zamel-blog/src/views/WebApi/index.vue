<script setup lang="ts">
import Notification from './components/Notification.vue';
import Photo from './components/Photo.vue';
import Record from './components/Record.vue';
import Location from './components/Location.vue';
import Encode from './components/Encode.vue';

const activeName = ref<string>('notification');

const handleClick = (tab: TabsPaneContext) => {
    activeName.value = tab.props.name;
};
</script>

<template>
    <main>
        <div>一些可能会用到的webapi使用场景</div>
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
            <el-tab-pane label="位置信息" name="location">
                <Location />
            </el-tab-pane>
            <el-tab-pane label="编码" name="encode">
                <Encode />
            </el-tab-pane>
        </el-tabs>
    </main>
</template>

<style lang="less" scoped>
.demo-tabs {
    min-width: 400px;
}
</style>
