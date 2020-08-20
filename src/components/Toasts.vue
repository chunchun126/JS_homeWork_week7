<template>
  <div style="position: fixed; top: 20px; right: 20px; min-width: 300px; z-index: 11000;">
    <div
      v-for="(item, i) in messages"
      :id="`toast-${i}`"
      :key="i"
      class="toast fade show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-autohide="false"
    >
      <div class="toast-header">
        <div
          class="inline-block rounded mr-2"
          style="width: 20px; height: 20px"
          :class="`bg-${ item.status }`"
        />
        <strong class="mr-auto">六角實戰班</strong>
        <small>現在</small>
        <button
          type="button"
          class="ml-2 mb-1 close"
          data-dismiss="toast"
          aria-label="Close"
          @click="closeToast(`toast-${i}`)"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="toast-body">
        {{ item.message }}
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */
export default {
  name: 'Toasts',
  data() {
    return {
      messages: [], // 陣列裡會有很多物件(Toast)，一個物件代表一個 Toast
    };
  },
  created() {
    const vm = this;
    // 監聽事件 $on('事件名稱', 觸發的方法)
    vm.$bus.$on('message:push', (message, status = 'warning') => { // 預設參數
      vm.updateMessage(message, status); // 觸發 updateMessage 方法
    });
  },
  methods: {
    // 更新目前的 訊息 及 狀態
    updateMessage(message, status) {
      const timestamp = Math.floor(new Date() / 1000);
      // 每個 Toast 獨有的時間戳，用以分辨是哪一個 Toast（有點像 id 的概念）
      // Math.floor() 函式會回傳小於等於所給數字的最大整數
      this.messages.push = {
        // 用 push 的方式 將物件傳送
        message,
        status,
        timestamp,
      };
      // 觸發 5 秒後移除的方法
      this.removeMessageForSec(timestamp);
    },
    // 5 秒後移除彈跳訊息
    removeMessageForSec(timestamp) {
      // 將時間戳代入參數 確定是哪一個 Toast
      const vm = this;
      setTimeout(() => {
        // 使用迴圈 抓出 符合條件 的那一個 Toast
        vm.messages.forEach((item, i) => {
          if (timestamp === item.timestamp) {
            // 代入的時間戳 等於 陣列裡的時間戳
            vm.messages.splice(i, 1); // splice() 方法可以刪除陣列的內容
          }
        });
      }, 5000);
    },
    // 手動關閉 Toast
    closeToast(toastId) {
      $(`#${toastId}`).toast('hide');
    },
  },
};
</script>

<style scope>
.message-alert {
  position: fixed;
  max-width: 50%;
  top: 56px;
  right: 20px;
  z-index: 1100;
}
</style>
