<template>
    <div>
        <div id="canvas-container" class="container"></div>

        <el-form :form="form" :inline="true">
            <el-form-item label="x">
                <el-input-number placeholder="x" min="0" max="500" v-model="form.x"></el-input-number>
            </el-form-item>
            <el-form-item label="y">
                <el-input-number placeholder="y" min="0" max="300" v-model="form.y"></el-input-number>
            </el-form-item>
            <el-form-item label="w">
                <el-input-number placeholder="w" min="0" max="500" v-model="form.w"></el-input-number>
            </el-form-item>
            <el-form-item label="h">
                <el-input-number placeholder="h" min="0" max="300" v-model="form.h"></el-input-number>
            </el-form-item>
            <el-form-item label="color">
                <el-color-picker v-model="form.color"></el-color-picker>
            </el-form-item>
            <el-form-item label="draggable">
                <el-checkbox v-model="form.draggable"></el-checkbox>
            </el-form-item>
            <div>
                <el-button @click="addRect">Add Rect</el-button>
            </div>
        </el-form>
    </div>
</template>
<script setup type="ts">
import { EasyCanvas } from '@/lib/canvas';
import { onMounted } from 'vue';

const defaultFormData = {
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    color: "#ffffff",
    draggable: true,
};

const form = ref(defaultFormData);
const easyCanvas = ref();

const addRect = () => {
    const {
        x, y, w, h, color, draggable
    } = form.value;
    easyCanvas.value.addRect(x, y, w, h, color, draggable);
    form.value = defaultFormData;
};

onMounted(() => {
    const container = document.getElementById('canvas-container');
    easyCanvas.value = new EasyCanvas(500, 300, container);
    easyCanvas.value.addRect(50, 50, 100, 80, 'red', true);   // Draggable
    easyCanvas.value.addRect(200, 100, 120, 60, 'blue', true); // Draggable
    easyCanvas.value.addRect(100, 200, 80, 40, 'green', false); // Not draggable
});
</script>
<style lang="less" scoped>
.container {
    width: 500px;
    height: 300px;
    margin-bottom: 20px;
    background-color: black;
}
</style>