<script setup lang="ts">
import Lesson1 from './components/Lesson1.vue';
import Lesson2 from './components/Lesson2.vue';

const activeName = ref<string>('lesson-one');

const handleClick = (tab: TabsPaneContext) => {
    activeName.value = tab.props.name;
};
</script>

<template>
    <main>
        <div>利用tensorflow.js可以直接在web上训练各种模型，进行数据和图像的预测</div>
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="数据预测" name="lesson-one">
                <Lesson1 />
            </el-tab-pane>
            <el-tab-pane label="识别数字" name="lesson-two">
                <Lesson2 />
            </el-tab-pane>
        </el-tabs>
    </main>
</template>
<style lang="less" scoped>
.demo-tabs {
    min-width: 400px;
}
</style>
