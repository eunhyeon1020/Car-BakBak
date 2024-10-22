import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/main',
      component: () => import('@/components/Main.vue'),
    }, {
      path: '/intro',
      component: () => import('@/components/Notice.vue'),
    }, {
      path: '/map',
      component: () => import('@/components/Notice.vue'),
    }, {
      path: '/store',
      component: () => import('@/components/Notice.vue'),
    }, {
      path: '/notice',
      component: () => import('@/components/Notice.vue'),
    },

    // redirect : 에러가 나거나 처음 보여줄 페이지를 설정한다.
    {
      path: '/',
      redirect: '/main',
    }
  ]
});