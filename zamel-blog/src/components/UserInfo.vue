<script setup lang="ts">
</script>

<template>
  <div class="user-info">
   
    <div class="avatar">
      <img src="@/assets/avatar.jpeg" />
    </div>
    <div class="info">
        <div class="nickname">Zamel</div>
        <div class="desc">欢迎来到我的个人空间，喜欢看什么可以去我的<a href="https://github.com/810307015">github</a>留言!</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.user-info {
    display: flex;
    align-items: center;
    padding: 20px;
    .avatar {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;
        img {
            width: 100px;
        }
    }
    .info {
        margin-left: 10px;

        .nickname {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 5px;
            color: #333;
        }

        .desc {
            color: #666;
        }
    }
}

</style>
