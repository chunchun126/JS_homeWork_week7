<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container-fluid mt-4">
      <!-- add Product Btn -->
      <div class="text-right mb-3">
        <button
          @click="openModal('new')"
          type="button"
          class="btn btn-sm btn-outline-success"
          data-toggle="modal"
          data-target="#addModal"
        >
          <i class="fas fa-plus mr-2"></i>新增產品
        </button>
      </div>
      <!-- Table -->
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">縮圖</th>
            <th scope="col">分類</th>
            <th scope="col">產品名稱</th>
            <th scope="col">原價</th>
            <th scope="col">售價</th>
            <th scope="col">是否啟用</th>
            <th scope="col" class="text-center">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,key) in products" :key="item.id">
            <th scope="row">{{ key+1 }}</th>
            <td>
              <img :src="item.imageUrl" class="smallImg" alt />
            </td>
            <td>{{ item.category }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.origin_price }}</td>
            <td>{{ item.price }}</td>
            <td class="text-center">
              <i class="far fa-circle text-success" v-if="item.enabled"></i>
              <i class="fas fa-minus-circle text-muted" v-else></i>
            </td>
            <td class="text-center">
              <div class="btn-group">
                <!-- 編輯 Btn -->
                <button
                  @click="openModal('edit', item)"
                  type="button"
                  class="btn btn-outline-secondary btn-sm"
                  data-toggle="modal"
                  data-target="#addModal"
                >
                  <i class="fas fa-pen"></i>
                </button>
                <!-- 刪除 Btn -->
                <button
                  @click="openModal('dele', item)"
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  data-toggle="modal"
                  data-target="#deleModal"
                >
                  <i class="fas fa-trash-alt"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- pagination 元件 -->
      <pagination :pages="pagination" @emit-pages="getProducts"/>
      <!-- add Modal -->
      <div
        class="modal fade bd-example-modal-xl"
        id="addModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="addModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content">
            <div class="modal-header bg-dark text-white">
              <h5 class="modal-title" id="addModalLabel">新增產品</h5>
              <button
                type="button"
                class="close text-white"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="imageUrl">輸入圖片網址</label>
                      <input
                        id="imageUrl"
                        v-model="tempProduct.imageUrl[0]"
                        type="text"
                        class="form-control"
                        placeholder="請輸入圖片網址"
                      />
                      <img :src="tempProduct.imageUrl[0]" class="img-fluid mt-3" />
                    </div>
                  </div>
                  <div class="col-md-8">
                    <form>
                      <div class="form-group">
                        <label for="inputItemName">產品名稱</label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputItemName"
                          placeholder="請輸入產品名稱"
                          v-model="tempProduct.title"
                        />
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label for="inputCategory">分類</label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputCategory"
                            placeholder="請輸入分類"
                            v-model="tempProduct.category"
                          />
                        </div>
                        <div class="form-group col-md-6">
                          <label for="inputUnit">單位</label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputUnit"
                            placeholder="請輸入單位"
                            v-model="tempProduct.unit"
                          />
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label for="inputOriginPrice">原價</label>
                          <input
                            type="number"
                            class="form-control"
                            id="inputOriginPrice"
                            placeholder="請輸入原價"
                            v-model="tempProduct.origin_price"
                          />
                        </div>
                        <div class="form-group col-md-6">
                          <label for="inputPrice">售價</label>
                          <input
                            type="number"
                            class="form-control"
                            id="inputPrice"
                            placeholder="請輸入售價"
                            v-model="tempProduct.price"
                          />
                        </div>
                      </div>
                      <hr />
                      <div class="form-group">
                        <label for="inputDescription">產品描述</label>
                        <textarea
                          class="form-control"
                          id="inputDescription"
                          rows="2"
                          placeholder="請輸入產品描述"
                          v-model="tempProduct.description"
                        ></textarea>
                      </div>
                      <div class="form-group">
                        <label for="inputContent">說明內容</label>
                        <vue-editor
                          v-model="tempProduct.content"
                          id="inputContent">
                        </vue-editor>
                      </div>
                      <div class="form-group">
                        <div class="form-check">
                          <input
                            class="form-check-input formCheck"
                            type="checkbox"
                            id="gridCheck"
                            v-model="tempProduct.enabled"
                          />
                          <label class="form-check-label" for="gridCheck">是否啟用</label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <hr class="m-0" />
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary btn-sm"
                data-dismiss="modal">取消</button>
              <button @click="updateProduct" type="button"
                class="btn btn-primary btn-sm">確定</button>
            </div>
          </div>
        </div>
      </div>
      <!-- dele Modal -->
      <div
        class="modal fade"
        id="deleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="deleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header bg-danger text-white">
              <h5 class="modal-title" id="deleModalLabel">刪除產品</h5>
              <button
                type="button"
                class="close text-white"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              是否刪除
              <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-sm btn-outline-secondary"
                data-dismiss="modal">取消</button>
              <button type="button" class="btn btn-sm btn-danger"
                @click="deleProduct(tempProduct.id)">確定刪除</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */
import Pagination from '@/components/Pagination.vue';
import { VueEditor } from 'vue2-editor';

export default {
  name: 'Products',
  components: {
    Pagination,
    VueEditor,
  },
  data() {
    return {
      products: [],
      pagination: {},
      // token: '',
      tempProduct: { // 暫時存放資料（input 輸入的資料）的地方，避免直接變更原始資料
        imageUrl: [],
      },
      isNew: false,
      isLoading: false,
    };
  },
  props: ['token'],
  created() {
    // 取 token（因外層元件 Dashboard 已存取，所以內層元件不須再存一次）
    // this.token = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    // this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;

    // 取 後台 產品列表 API
    // const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/products`;
    // this.$http
    //   .get(api)
    //   .then((res) => {
    //     console.log('AJAX 回傳資料');
    //     this.products = res.data.data;
    //   })
    //   .catch((error) => {
    //     console.log('AJAX 失敗');
    //     console.log(error.response);
    //   });
    // 執行
    this.getProducts();
  },
  methods: {
    // 取「全部」產品資料 [ok]
    getProducts(nowPage = 1) { // 預設參數，預設（page）頁碼在第 1 頁
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/products?page=${nowPage}`;
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false;
          console.log('取全部產品資料 成功');
          this.products = res.data.data;
          this.pagination = res.data.meta.pagination;
        })
        .catch((error) => {
          this.isLoading = false;
          console.log('取得失敗', error.response);
        });
    },
    // 取「單一」產品資料 並呈現在 Modal 內 [ok]
    getDetail(id) {
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/product/${id}`;
      this.$http.get(api)
        .then((res) => {
          console.log('取單一產品資料 成功', res);
          this.tempProduct = res.data.data;
          $('#addModal').modal('show');
        })
        .catch((error) => {
          console.log('取得失敗', error.response);
        });
    },
    // 開啟 Modal [ok]
    openModal(isNew, item) {
      switch (isNew) {
        case 'new': // 新增（不須物件拷貝）
          this.tempProduct = { // 給新的參考路徑
            imageUrl: [],
          };
          this.isNew = true;
          $('#addModal').modal('show');
          break;
        case 'edit': // 編輯
          this.isNew = false; // 不是新增
          // 取單一產品細節
          this.getDetail(item.id);
          break;
        case 'dele': // 刪除
          this.tempProduct = { ...item }; // 物件拷貝
          $('#deleModal').modal('show');
          break;
        default:
          break;
      }
    },
    // 更新產品 或 新增產品 [ok]
    updateProduct() {
      this.isLoading = true;
      // 因為 網址 和 方法 是會變更的所以用 let 宣告
      let api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/product`;
      // 方法預設為「新增產品」
      let httpMethod = 'post';

      // 編輯（當不是「新增產品」時，切換「編輯」api）
      // if 判斷要寫在 AJAX 前面，不然會都直接跑 post
      if (!this.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/product/${this.tempProduct.id}`;
        httpMethod = 'patch';
      }

      this.$http[httpMethod](api, this.tempProduct)
        .then(() => {
          this.isLoading = false;
          console.log('新增產品 成功');
          $('#addModal').modal('hide');
          this.$bus.$emit('message:push',
            '新增成功囉，好棒ヽ(＾Д＾)ﾉ ',
            'success');
          // 重新執行 取所有產品
          this.getProducts();
        })
        .catch((error) => {
          this.isLoading = false;
          $('#addModal').modal('hide');
          console.log('updateProduct 失敗', error.response.data);
        });
    },
    // 刪除產品 [ok]
    deleProduct(id) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/product/${id}`;
      this.$http.delete(api)
        .then(() => {
          this.isLoading = false;
          // 關閉 Modal
          $('#deleModal').modal('hide');
          // 成功刪除後再重新觸發一次 getProducts
          this.getProducts();
          this.$bus.$emit('message:push',
            '刪除成功囉，好棒ヽ(＾Д＾)ﾉ',
            'success');
          console.log('成功刪除');
        });
    },
  },
};
</script>

<style lang="css">
.formCheck {
  width: 22px;
  height: 22px;
}
.smallImg {
  max-width: 70px;
  height: auto;
}
@import '~vue2-editor/dist/vue2-editor.css';

/* Import the Quill styles you want */
@import '~quill/dist/quill.core.css';
@import '~quill/dist/quill.bubble.css';
@import '~quill/dist/quill.snow.css';
</style>
