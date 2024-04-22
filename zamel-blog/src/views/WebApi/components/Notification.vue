<script setup lang="ts">
import logo from "@/assets/logo.svg";
const enable = ref<boolean>(false);

const enableNotification = () => {
    Notification.requestPermission().then((permission) => {
        console.log(permission);
        // 根据用户的回答显示或隐藏按钮
        enable.value = permission === "granted";
        if (permission === "granted") {
            const text = '嘿！你开启了网站的通知功能';
            const notification = new Notification("测试", { body: text, icon: logo, timestamp: Date.now(), requireInteraction: true, vibrate: true });
            console.log(notification);
            // notification.show();
            notification.onclick = () => {
                ElMessage.success('你点击了通知');
            };
        
            notification.onclose = () => {
                ElMessage.info('你关闭了通知');
            };
        }
    });
};
</script>

<template>
    <div>
        <el-button type="primary" @click="enableNotification">允许网页通知</el-button>
    </div>
</template>