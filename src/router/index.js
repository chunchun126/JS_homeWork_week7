import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  // 前台
  {
    path: '/',
    name: '前台首頁',
    component: () => import('../views/frontend/Home.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/frontend/Products.vue'),
      },
      { // 動態路由
        path: 'product/:id',
        component: () => import('../views/frontend/Product.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/frontend/Orders.vue'),
      },
      { // 登入
        path: 'login',
        component: () => import('../views/frontend/Login.vue'),
      },
    ],
  },
  // 後台
  {
    path: '/admin',
    component: () => import('../views/backend/layout/Dashboard.vue'),
    children: [
      {
        name: '產品',
        path: 'products',
        component: () => import('../views/backend/Products.vue'),
      },
      {
        name: '訂單',
        path: 'orders',
        component: () => import('../views/backend/Orders.vue'),
      },
      {
        name: '優惠券',
        path: 'coupons',
        component: () => import('../views/backend/Coupons.vue'),
      },
      {
        name: '圖片儲存',
        path: 'storages',
        component: () => import('../views/backend/Storages.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
