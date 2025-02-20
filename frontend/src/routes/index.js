import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/views/main/Main.vue'),
    }, {
      path: '/intro',
      component: () => import('@/views/main/Main.vue'),
    }, {
      path: '/map',
      component: () => import('@/views/map/Map.vue'),
    }, {
      path: '/store',
      component: () => import('@/views/store/Store.vue'),
    }, {
      path: '/storedetail',
      component: () => import('@/views/store/StoreDetail.vue'),
    }, {
      path: '/notice',
      component: () => import('@/views/notice/Notice.vue'),
    }, {
      path: '/noticedetail',
      component: () => import('@/views/notice/NoticeDetail.vue'),
    }, {
      path: '/login',
      component: () => import('@/views/main/login/Login.vue'),
    }, {
      path: '/sign',
      component: () => import('@/views/main/login/Sign.vue'),
    },{
      path: '/mypage',
      component: () => import('@/views/profile/Mypage.vue'),
    },{
      path: '/error',
      component: () => import('@/components/Error.vue'),
    },

    // redirect : 에러가 나거나 처음 보여줄 페이지를 설정한다.
    {
      path: '/',
      redirect: '/',
    },
  ]
});