<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import type { TabsPaneContext } from 'element-plus';
import { ElTabs, ElTabPane } from 'element-plus';
const menuConfig = [
    {
        label: '首页',
        path: '/',
    },
    {
        label: '记录',
        path: '/record',
    },
    {
        label: 'webassembly',
        path: '/webassembly',
    }
];
const tabPostion = ref<string>('left');
const route = useRoute();
const router = useRouter();
const goTo = (tab: TabsPaneContext) => {
    router.push(tab.props.name as string);
};
</script>

<template>
  <div class="nav-bar">
    <el-tabs
        v-model="route.path"
        type="card"
        :tab-position="tabPostion"
        @tab-click="goTo"
    >
        <el-tab-pane
            v-for="menu in menuConfig"
            :key="menu.label"
            :label="menu.label"
            :name="menu.path"
        >
        </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="less" scoped>
.nav-bar {
    margin-right: 10px;
}
</style>
