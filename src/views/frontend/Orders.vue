<template>
  <div>
    <div class="my-5 row justify-content-center">
      <div class="col-md-4">
        <h4 class="mb-4">請輸入付款資訊</h4>
        <!-- validation-observer 驗證整體表單 -->
        <validation-observer v-slot="{ invalid }">
          <!-- 表單送出改為使用 form submit 的方法 -->
          <form @submit.prevent="createOrder" class="text-left">
            <div class="form-group">
              <validation-provider
                rules="required"
                class="form-group"
                tag="div"
                v-slot="{ errors, classes }"
              >
                <label for="name">收件人姓名</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="form.name"
                  placeholder="請輸入收件人姓名"
                  name="收件人姓名"
                  :class="classes"
                />
                <!-- 錯誤訊息 -->
                <span class="invalid-feedback">{{ errors[0] }}</span>
              </validation-provider>
            </div>
            <div class="form-group">
              <validation-provider
                rules="required|email"
                class="form-group"
                tag="div"
                v-slot="{ errors, classes }"
              >
                <label for="email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="form.email"
                  placeholder="請輸入收件人Email"
                  name="信箱"
                  :class="classes"
                />
                <!-- 錯誤訊息 -->
                <span class="invalid-feedback">{{ errors[0] }}</span>
              </validation-provider>
            </div>
            <div class="form-group">
              <validation-provider
                rules="required|min:8"
                class="form-group"
                tag="div"
                v-slot="{ errors, classes }"
              >
                <label for="tel">電話</label>
                <input
                  type="tel"
                  class="form-control"
                  id="tel"
                  v-model="form.tel"
                  placeholder="請輸入收件人電話"
                  name="電話"
                  :class="classes"
                />
                <!-- 錯誤訊息 -->
                <span class="invalid-feedback">{{ errors[0] }}</span>
              </validation-provider>
            </div>
            <div class="form-group">
              <validation-provider
                rules="required"
                class="form-group"
                tag="div"
                v-slot="{ errors, classes }"
              >
                <label for="address">地址</label>
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  v-model="form.address"
                  placeholder="請輸入地址"
                  name="地址"
                  :class="classes"
                />
                <!-- 錯誤訊息 -->
                <span class="invalid-feedback">{{ errors[0] }}</span>
              </validation-provider>
            </div>
            <div class="form-group">
              <label for="payment">購買方式</label>
              <select id="payment" v-model="form.payment" class="form-control" required>
                <option value disabled>請選擇付款方式</option>
                <option value="WebATM">WebATM</option>
                <option value="ATM">ATM</option>
                <option value="CVS">CVS</option>
                <option value="Barcode">Barcode</option>
                <option value="Credit">Credit</option>
                <option value="ApplePay">ApplePay</option>
                <option value="GooglePay">GooglePay</option>
              </select>
            </div>
            <div class="form-group">
              <label for="message">留言</label>
              <textarea id="message" v-model="form.message"
                class="form-control" cols="30" rows="3"></textarea>
            </div>
            <!-- 送出表單使用 submit 的方法，如果驗證未通過則 disabled 該按鈕 -->
            <div class="text-right">
              <button type="submit" class="btn btn-primary" :disabled="invalid">送出表單</button>
            </div>
          </form>
        </validation-observer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        tel: '',
        address: '',
        payment: '',
        message: '',
      },
      coupon: {},
    };
  },
  created() {

  },
  methods: {
    // 新增優惠券
    addCoupon() {
      const url = `${process.env.VUE_APP_APIPATH}/api/${this.uuid}/ec/coupon/search`;
      this.$http.post(url, { code: this.coupon_code }).then((response) => {
        this.coupon = response.data.data;
      }).catch((error) => {
        console.log('建立一筆訂單 失敗', error.response);
      });
    },
    // 建立一筆訂單
    createOrder() {
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/orders`;
      const order = { ...this.form };
      this.$http.post(api, order)
        .then((res) => {
          console.log('建立一筆訂單 成功', res);
        })
        .catch((error) => {
          console.log('建立一筆訂單 失敗', error.response);
        });
    },
  },
};
</script>

<style>
</style>
