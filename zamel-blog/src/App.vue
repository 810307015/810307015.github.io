<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import UserInfo from './components/UserInfo.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="wrapper">
      <UserInfo />
  </div>
  <div class="content">
    <NavBar />
    <RouterView />
  </div>
</template>

<style scoped>
.content {
  padding: 20px;
  display: flex;
}
@media screen and (max-width: 768px) {
    .content {
        display: block;
    }
}
</style>
