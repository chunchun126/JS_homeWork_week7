<template>
  <div class="products">
    <loading :active.sync="isLoading"></loading>
    <h1>這裡是產品頁面</h1>
    <table>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.price }}</td>
        <td>
          <!-- 動態路由 使用 動態屬性 :to -->
          <router-link :to="`/product/${item.id}`">連結</router-link>
          <!-- @click 觸發方法 -->
          <button @click="goPage(item)">btn連結</button>
          <!-- 使用 a 連結需補上 prevent 避免被預設網址覆蓋 -->
          <a href="#" @click.prevent="goPage(item)">a連結</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      isLoading: false,
    };
  },
  methods: {
    goPage(item) {
      console.log(this.$router);
      // 方法 $router.push 切換頁面
      this.$router.push(`/product/${item.id}`);
    },
  },
  created() {
    this.isLoading = true;
    this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products`)
      .then((res) => {
        this.isLoading = false;
        this.products = res.data.data;
      })
      .catch((error) => {
        this.isLoading = false;
        console.log(error.response);
      });
  },
};
</script>
