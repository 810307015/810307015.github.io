<script setup lang="ts">
import avatar from "@/assets/logo.svg";
const topLeft = ref<number>(50);
const topRight = ref<number>(50);
const bottomLeft = ref<number>(50);
const bottomRight = ref<number>(50);
</script>

<template>
    <el-space class="container" direction="vertical" size="large" alignment="flex-start">
        <div>背景的设置主要就是可以使用纯色、图片、渐变，这里主要演示渐变，图片的话之前有很长一段时间流行过雪碧图，也就是一张图上放着很多图标，然后通过背景图片，修改它的position去更换图标，不过自从字体图标流行之后便用的比较少了，svg图还是更好用一点。图片的背景尺寸常用的就是cover和contain，区别就在于前者通常是以放大图片为主，使得图片的宽高都能贴合到容器上，超出部分不展示，后者则往往是缩小图片，使得图片能完整展示，容器上下或者左右会有空余空间。不过相同点就是两者都会保留图片的宽高比。渐变的话主要是线性渐变和径向渐变，通俗一点理解就是前者是在一条线上去变化，后者就是一个点散发到周边，有点像点光源的感觉。</div>
        
        <div class="box box-1"></div>
        <div class="box box-2"></div>

        <div>有一次无意中发现border其实也可以使用渐变，所以也弄一个效果看看，不过就是border使用渐变之后border-radius无效了</div>
        <div class="box box-3"></div>
    </el-space>
</template>

<style lang="less" scoped>
.container {
    width: 500px;
}
.box {
    width: 150px;
    height: 150px;
}

.box-1 {
    background: linear-gradient(to right, #0087ff 0%, #41b3f9 50%, #0087ff 100%);
}

.box-2 {
    background: radial-gradient(circle, #0087ff 0%, #41b3f9 50%, #0087ff 100%);
}

.box-3 {
    border: 10px solid transparent;
    border-image: linear-gradient(to right, #0087ff 0%, #41b3f9 50%, #0087ff 100%) 10;
    border-radius: 10px;
}
</style>
