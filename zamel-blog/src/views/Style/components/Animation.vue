<script setup lang="ts">
</script>

<template>
    <el-space class="container" direction="vertical" size="large" alignment="flex-start">
        <div>动画主要是分为帧动画和过渡动画，前者使用@keyframe结合animation来定义动画效果，后者则是使用transtion来定义过渡效果</div>
        <div>使用自带的linear函数，就是平滑的线性动画</div>
        <div class="box box-1"></div>
        <div>使用贝塞尔曲线实现的动画函数就会变得更有活力</div>
        <div class="box box-2"></div>
        <div>使用steps函数实现的动画，就是一步步的来，可以用来实现无js的纯css轮播图</div>
        <div class="box box-3">
            <div class="item item-1"></div>
            <div class="item item-2"></div>
            <div class="item item-3"></div>
        </div>
        <div>过渡动画一般用于悬浮交互上比较多，比如下面，鼠标悬浮时会有一个圆角效果</div>
        <div class="box box-4"></div>
    </el-space>
</template>

<style lang="less" scoped>
.container {
    width: 500px;
}
.box {
    width: 150px;
    height: 150px;
    background: linear-gradient(to right, #0087ff 0%, #41b3f9 50%, #0087ff 100%);
}

@keyframes scale-animation {
    0% {
        transform: scale(1);
    }
    25% {
        transform: scale(0.75);
    }
    50% {
        transform: scale(0.5);
    }
    75% {
        transform: scale(0.75);
    }
    100% {
        transform: scale(1);
    }
}

.box-1 {
    animation: 2s scale-animation 1s linear infinite;
}

.box-2 {
    animation: 2s scale-animation 2s cubic-bezier(0.1, -0.6, 0.2, 0) infinite;
}

.box-3 {
    position: relative;
}

.item {
    width: 150px;
    height: 150px;
    position: absolute;
    top: 0;
    left: 0;
}

@keyframes index-animation {
    0% {
        z-index: 1;
    }
    25% {
        z-index: 2;
    }
    50% {
        z-index: 3;
    }
    75% {
        z-index: 2;
    }
    100% {
        z-index: 1;
    }
}

.item-1 {
    background: red;
    animation: 3s index-animation 0s steps(3, end) infinite;
}

.item-2 {
    background: blue;
    animation: 3s index-animation 1s steps(3, end) infinite;
}

.item-3 {
    background: green;
    animation: 3s index-animation 2s steps(3, end) infinite;
}

.box-4 {
    transition: all 0.3s;
    &:hover {
        border-radius: 30px;
    }
}
</style>
