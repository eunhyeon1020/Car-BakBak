import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/components/Main.vue'),
    }, {
      path: '/intro',
      component: () => import('@/components/Main.vue'),
    }, {
      path: '/map',
      component: () => import('@/components/Map.vue'),
    }, {
      path: '/store',
      component: () => import('@/components/Store.vue'),
    }, {
      path: '/storedetail',
      component: () => import('@/components/StoreDetail.vue'),
      meta: {
        itemNm: '잠 잘오는 침낭',
        price: 45250,
        imgSrc: 'bestItem_1.png',
      }
    }, {
      path: '/notice',
      component: () => import('@/components/Notice.vue'),
    }, {
      path: '/noticedetail',
      component: () => import('@/components/NoticeDetail.vue'),
    }, {
      path: '/login',
      component: () => import('@/components/Login.vue'),
    }, {
      path: '/sign',
      component: () => import('@/components/Sign.vue'),
    },{
      path: '/mypage',
      component: () => import('@/components/Mypage.vue'),
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