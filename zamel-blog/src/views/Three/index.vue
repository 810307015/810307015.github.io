<script setup lang="ts">
import DemoOne from './components/DemoOne.vue';

const activeName = ref<string>('demo-one');

const handleClick = (tab: TabsPaneContext) => {
    activeName.value = tab.props.name;
};
</script>

<template>
    <main>
        <div>利用three.js可以直接加载从网上下载的模型文件，不过托管在github上加载得会很慢</div>
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="汽车模型" name="demo-one">
                <DemoOne />
            </el-tab-pane>
        </el-tabs>
    </main>
</template>
<style lang="less" scoped>
.demo-tabs {
    min-width: 400px;
}
</style>
