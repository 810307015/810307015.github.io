<script lang="ts" setup>
import type { TabsPaneContext } from 'element-plus';
import CropMulti from '@/components/CropMulti.vue';
import CropSize from '@/components/CropSize.vue';
import BigNumberCaculate from '@/components/BigNumberCaculate.vue';
import { ElTabs } from 'element-plus';
const activeName = ref<string>('crop-multi');

const handleClick = (tab: TabsPaneContext) => {
    activeName.name = tab.props.name;
};

</script>

<template>
    <main>
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="等比例裁剪" name="crop-multi">
                <CropMulti />
            </el-tab-pane>
            <el-tab-pane label="自选尺寸裁剪" name="crop-size">
                <CropSize />
            </el-tab-pane>
            <el-tab-pane label="大数计算" name="big-number-caculate">
                <BigNumberCaculate />
            </el-tab-pane>
        </el-tabs>
    </main>
</template>

<style lang="less" scoped>

</style>