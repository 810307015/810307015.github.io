<script setup lang="ts">
const topLeft = ref<number>(50);
const topRight = ref<number>(50);
const bottomLeft = ref<number>(50);
const bottomRight = ref<number>(50);
</script>

<template>
    <el-space class="box" direction="vertical" size="large" alignment="flex-start">
        <div>比较常见的设置方式就是设置像素，像素就代表了每个角对应的圆的半径，我个人理解就像是先贴合每个角切出对应圆角大小的正方形，然后以对角为圆心做一个半圆，使用这个半圆去切容器的角，得到的圆弧就是圆角。也可以设置百分比，设置一个数就代表水平垂直的百分比都是一个值。设置百分比为 10% / 20% 就代表，四个圆角的水平半径为长度的10%，四个圆角的垂直半径为长度的20%</div>
        <el-space>
            <span class="label">
                border-top-left-radius: 
            </span>
            <el-slider v-model="topLeft" :min="0" :max="100" size="large" class="silder" show-input />
        </el-space>
        <el-space>
            <span class="label">
                border-top-right-radius: 
            </span>
            <el-slider v-model="topRight" :min="0" :max="100" size="large" class="silder" show-input />
        </el-space>
        <el-space>
            <span class="label">
                border-bottom-left-radius: 
            </span>
            <el-slider v-model="bottomLeft" :min="0" :max="100" size="large" class="silder" show-input />
        </el-space>
        <el-space>
            <span class="label">
                border-bottom-right-radius: 
            </span>
            <el-slider v-model="bottomRight" :min="0" :max="100" size="large" class="silder" show-input />
        </el-space>
        <div
            class="demo"
            :style="{
                borderRadius: `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`
            }"
        ></div>
    </el-space>
</template>

<style lang="less" scoped>
.box {
    width: 500px;
}
.demo {
    background: rgba(220, 18,39, 0.8);
    width: 100px;
    height: 100px;
}
.label {
    width: 200px;
}
:deep(.silder) {
    min-width: 250px;
}
</style>
