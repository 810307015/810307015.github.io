<script setup lang="ts">
</script>

<template>
    <el-space class="container" direction="vertical" size="large" alignment="flex-start">
        <div>先看盒模型，目前主流的盒模型分为border-box和content-box，也很好理解，前者的width=contentwidth + padding + border，后者就是width = contentwidth，后者的实际宽度在存在padding和border的前提下是比定义的width要更大的</div>
        <div class="box box-1">
            border-box，width: 150px, height: 150px, padding: 10px, border: 10px
        </div>
        <div class="box box-2">
            content-box，width: 150px, height: 150px, padding: 10px, border: 10px
        </div>

        <div>再来看看流式布局，流式布局内部的块级元素会从上往下排放，行内元素则会从左往右排放，默认的布局就是流式布局</div>
        <div>谈到了流式布局，就不得不提脱离常规流式布局的方法，常见的就是浮动和定位</div>

        <div class="box">
            <div class="float">浮动元素</div>
            会打破常规的流式布局，文字遇到浮动的元素时，都会腾出空间保证文字能全部展示，常常用于文字排版上
        </div>

        <div class="box">
            <div class="absolute">定位元素</div>
            一般都是浮在流式元素上方，通过z-index设定它的层级，与浮动区别比较大的就是，文字遇到浮动元素并不会改变其原有的排版方式
        </div>

        <div>而它之所以会脱离文档流，其实就是因为不管是浮动还是定位，其本质还是创建了一个BFC（块级格式化上下文），该上下文创建了一个新的布局环境，与其它内容分隔开来，而页面的根元素(html元素)实际上就是创建了一个BFC，用来给整个文档提供一个布局环境。而常见的创建bfc的情形除了上述两种外还有以下几种</div>

        <div class="box inline-block">
            display: inline-block | table-cell | table-caption | table | table-row | table-row-group | table-header-group | table-footer-group | inline-table | flow-root
        </div>
        <div class="box overflow-hidden">
            overflow 值不为 visible 或 clip 的块级元素
        </div>
        <div class="box flex">
            弹性元素（display 值为 flex 或 inline-flex 元素的直接子元素），网格元素（display 值为 grid 或 inline-grid 元素的直接子元素）
        </div>
        <div class="box column">
            多列容器（column-count 或 column-width 值不为 auto，且含有 column-count: 1 的元素）。
        </div>
        <div class="box column">
            <div class="column-span">column-span 值为 all</div> 的元素始终会创建一个新的格式化上下文，即使该元素没有包裹在一个多列容器中
        </div>

        <div>而BFC最常用的两个场景就是清除浮动和阻止外边距重叠，需要注意的一个点是外边距折叠仅与垂直方向有关，左右两边的外边距是不会重叠的
            <span style="margin: 30px;">margin: 30px</span>
            <span style="margin: 30px;">margin: 30px</span>
        </div>

        <div>目前用的最多的就是弹性盒子布局，要了解弹性盒子布局，主要就是弄清楚主轴和交叉轴以及flex-grow，flex-shrink，flex-basis代表的含义其实就差不多了</div>
        <div>网格布局给我的感觉就是bootstrap中的col-*，将一行分成多列，用来实现页面的响应式布局感觉会很不错。不过直到bootstrap5，才开始支持css grid的实现，之前都是通过flex来模拟的</div>
    </el-space>
</template>

<style lang="less" scoped>
.box {
    position: relative;
    width: 300px;
    height: 150px;
    padding: 10px;
    border: 10px solid red;
    background: linear-gradient(to right, #0087ff 0%, #41b3f9 50%, #0087ff 100%);
}
.box-1 {
    box-sizing: border-box;
}
.box-2 {
    box-sizing: content-box;
}
.float {
    float: left;
    font-size: 18px;
    font-weight: 600;
}
.absolute {
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    font-size: 18px;
    font-weight: 600;
}
.inline-block {
    display: inline-block;
}
.overflow-hidden {
    overflow: hidden;
}
.column {
    column-count: 3;
}
.column-span {
    column-span: all;
    background: yellow;
}
</style>
