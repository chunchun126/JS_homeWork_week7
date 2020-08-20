<template>
  <div>
    <h2>這裡是單一產品頁面細節</h2>
    <h3>{{ product.title }}</h3>
    <p>{{ product.content }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 存取單一筆資料
      product: {},
    };
  },
  created() {
    // (1) this.$route 屬性取值 (2) this.$router 呼叫方法
    // console.log(this.$route.params.id); // 取單一產品 id
    const { id } = this.$route.params; // 需使用解構
    this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/product/${id}`)
      .then((res) => {
        this.product = res.data.data;
      })
      .catch((error) => {
        console.log(error.response);
      });
  },
};
</script>
