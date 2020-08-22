<template>
  <div id="app">
    <!-- toast 元件 -->
    <toasts />
    <loading :active.sync="isLoading"></loading>
    <router-view/>
  </div>
</template>

<script>
import Toasts from '@/components/Toasts.vue';

export default {
  name: 'App',
  components: {
    Toasts,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  mounted() {
    this.isLoading = true;
    // 測試安裝 Vue axios
    this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products`)
      .then((res) => {
        this.isLoading = false;
        console.log(res);
      })
      .catch((error) => {
        this.isLoading = false;
        console.log(error.response);
      });
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Microsoft JhengHei', Avenir, Helvetica, Arial, sans-serif;
}
</style>
