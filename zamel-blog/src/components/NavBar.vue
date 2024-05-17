<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import type { TabsPaneContext } from 'element-plus';
import { ElTabs, ElTabPane } from 'element-plus';
const activeTab = ref<string>('/');
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
    },
    {
        label: 'three.js',
        path: '/three',
    },
    {
        label: '浏览器api',
        path: '/webapi',
    },
    {
        label: '样式相关',
        path: '/style',
    },
    {
        label: '组件相关',
        path: '/component',
    },
    {
        label: '深度学习相关',
        path: '/tensorflow',
    }
];
const tabPostion = ref<string>('left');
const route = useRoute();
const router = useRouter();
const goTo = (tab: TabsPaneContext) => {
    router.push(tab.props.name as string);
};

router.afterEach((to, from) => {
    activeTab.value = to.path;
});
onMounted(() => {
    activeTab.value = route.path;
    if (navigator.userAgent.includes('Mobile')) {
        tabPostion.value = 'top';
    }
});
</script>

<template>
  <div class="nav-bar">
    <el-tabs
        v-model="activeTab"
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
