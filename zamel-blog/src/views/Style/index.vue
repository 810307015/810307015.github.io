<script setup lang="ts">
import BorderRadius from './components/BorderRadius.vue';
import Background from './components/Background.vue';
import Animation from './components/Animation.vue';
import Layout from './components/Layout.vue';

const activeName = ref<string>('border-radius');

const handleClick = (tab: TabsPaneContext) => {
    activeName.value = tab.props.name;
};
</script>

<template>
    <main>
        <div>css样式相关</div>
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="圆角" name="border-radius">
                <BorderRadius />
            </el-tab-pane>
            <el-tab-pane label="背景" name="background">
                <Background />
            </el-tab-pane>
            <el-tab-pane label="动画" name="animation">
                <Animation />
            </el-tab-pane>
            <el-tab-pane label="盒模型和布局" name="layout">
                <Layout />
            </el-tab-pane>
        </el-tabs>
    </main>
</template>

<style lang="less" scoped>
.demo-tabs {
    min-width: 400px;
}
</style>
