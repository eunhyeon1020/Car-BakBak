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
        <router-link  :to="'login'">
          <p>로그인</p>
        </router-link>

        <div>|</div>

        <router-link :to="'sign'">
          <p>회원가입</p>
        </router-link>          
      </div>
    
      <div class="mobile-icon" @click="NavToggle">
        <i class="hamburger-icon"></i>
      </div>
      
      <!-- 1200px 일 때, 햄버거 아이콘 생성  -->
    </div>
    <!-- 로그인 후 header right 변환 -->
    <!-- <div class="user" style="display: none"><p>김은현 님</p></div>
    <div style="display: none">|</div>
    <div class="my-page" style="display: none"><p>마이페이지</p></div> -->
    
    <!-- 드롭다운 내비게이션 -->
    <div class="drop-nav" v-if="this.navToggle">
      <div>
        <div>소개</div>
        <div>지도</div>
        <div>스토어</div>
        <div>공지사항</div>
      </div>      
    </div>

  </div>
</template>

<script>

export default {
  data:() => ({
    isLogin: false,
    isMobile: false,
    navToggle: false, //초기값 - 동적으로 변화한다
    currentPath: '',
  }),
  
  methods: {
    goHome() {
      if (this.$route.path !== '/main') {
        this.$router.push({ path: '/main' });
      } else window.location.reload();
    },
    NavToggle() {
      this.navToggle = !this.navToggle;
      // FALSE = !FALSE (TRUE)   >>
      // TRUE = !TRUE (FALSE)   >>
      if (this.navToggle) {
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
      } else {
        document.getElementsByTagName('body')[0].style.overflow = ''; 
      }
    },

  }
};
</script>
