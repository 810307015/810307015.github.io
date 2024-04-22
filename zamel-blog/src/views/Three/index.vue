<script setup lang="ts">
import DemoOne from './components/DemoOne.vue';

const activeName = ref<string>('demo-one');

const handleClick = (tab: TabsPaneContext) => {
    activeName.name = tab.props.name;
};
</script>

<template>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="汽车模型" name="demo-one">
            <DemoOne />
        </el-tab-pane>
    </el-tabs>
</template>
