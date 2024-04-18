<script setup lang="ts">
import { RouterLink, useRoute, useRouter } from 'vue-router';
const menuConfig = [
    {
        label: '首页',
        path: '/',
    },
    {
        label: '记录',
        path: '/record',
    }
];
const route = useRoute();
const router = useRouter();
const goTo = (path: string) => {
    router.push(path);
};
</script>

<template>
  <div class="nav-bar">
    <div
        v-for="menu in menuConfig"
        :key="menu.label"
        :class="[
            'nav-bar-item',
            {active: menu.path === route.path}
        ]"
        @click="goTo(menu.path)"
    >
        {{ menu.label }}
    </div>
  </div>
</template>

<style lang="less" scoped>
.nav-bar {
    min-width: 100px;
    margin-right: 20px;
    &-item {
        width: 150px;
        height: 40px;
        border: 1px solid #1C5BFF;
        border-radius: 4px;
        text-align: center;
        line-height: 38px;
        cursor: pointer;
        color: #1C5BFF;
        &:not(:last-child) {
            margin-bottom: 10px;
        }

        &:hover,
        &.active {
            background-color: #1C5BFF;
            color: #fff;
        }
    }
}
@media screen and (max-width: 768px) {
    .nav-bar {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin-bottom: 10px;
        &-item {
            &:not(:last-child) {
                margin-bottom: 0;
                margin-right: 10px;
            }
        }
    }
}
</style>
