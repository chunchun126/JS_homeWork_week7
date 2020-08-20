<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">首頁</router-link> |
      <router-link to="/products">產品列表</router-link> |
      <router-link to="/orders">訂單</router-link> |
      <router-link to="/login">管理者登入</router-link>
    </div>
    <hr>
    <router-view/>
  </div>
</template>

<script>

export default {
};
</script>
