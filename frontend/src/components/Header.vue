<template>
  <div id="header">
    <div class="gnb">
      <div class="header-left">
        <div class="gnb-logo" @click="goHome"></div>
        <div class="top-menu">
          <ul>
            <li>
              <i class="ico about-menu"></i>
              <router-link :to="'intro'">
                <span>소개</span>
              </router-link>
            </li>
            <li>
              <i class="ico map-menu"></i>
              <router-link :to="'map'">
                <span>지도</span>
              </router-link>
            </li>
            <li>
              <i class="ico store-menu"></i>
              <router-link :to="'store'">
                <span>스토어</span>
              </router-link>
            </li>
            <li>
              <i class="ico notice-menu"></i>
              <router-link :to="'notice'">
                <span>고객지원</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="header-right">
        <router-link class="login" :to="'Login'"><p>로그인</p></router-link>
        <div>|</div>
        <div class="sign-up"><router-link :to="'sign'"><p>회원가입</p></router-link></div>
        <div class="user" style="display: none"><p>김은현 님</p></div>
        <div style="display: none">|</div>
        <div class="my-page" style="display: none"><p>마이페이지</p></div>
      </div>
    </div>
  </div>
</template>

<script>
// import { router } from '@/routes/routes';

export default {
  data:() => ({
    currentPath: '',
  }), 
  mounted() {
  },
  methods: {
    goHome() {
      if (this.$route.path !== '/main') {
        this.$router.push({ path: '/main' });
      }
    },
  }
};
</script>
