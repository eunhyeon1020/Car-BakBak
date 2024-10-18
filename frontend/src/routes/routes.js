import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/main',
      component: () => import('@/components/Main.vue'),      
    },
    {
      path: '/sub',
      component: () => import('@/components/SubMain.vue'),
    },
    // redirect : 에러가 나거나 처음 보여줄 페이지를 설정한다.
    {
      path: '/',
      redirect: '/main',
    }
  ]
});