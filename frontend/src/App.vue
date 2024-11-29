<template>
  <div id="app">
    <Header @NavToggle="NavToggleEvent" :appLogin="appLogin" v-if="headerShow"></Header>

    <router-view @logInOut="logInOutEvent" @showAlert="showAlertEvt"></router-view>   <!-- mypage 컴포넌트에서 로그아웃 -->

    <Footer v-if="footerShow" ></Footer>
    <!-- Alert 모달 호출 -->
    <Alert :show-prop="isShowAlert" @closeAlert="closeAlertEvt" :message="'본페이지는 서비스 준비중입니다. '" />
  </div>
</template>

<script setup>
  // var variable = 10;
</script>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Alert from '@/components/Alert.vue';

export default {
  // import 한 컴포넌트를 template에서 사용할 수 있게 해주는 부분 ( 태그로 사용 가능 )
  components: {
    Header,
    Footer,
    Alert
  },

  // 변수의 초기 값을 지정해주는 부분
  data:() => ({
    currentPath : '',
    headerShow: true, // Boolean : true / false
    footerShow: true,
    isShowAlert: false,
    appLogin: '', // 로그아웃, 로그인
  }),
  
  // 데이터가 수시로 
  watch: {
    // 페이지 host 뒤에 오는 파라미터가 변화될 때 실행 (주소 뒤 /파라미터)
    $route(to) {  // to 는 route라는 라이브러리(모듈)
      this.headerShow = true;
      this.footerShow = true;
      this.currentPath = to.path; // EX:: '/map'

      window.scrollTo(0,0);

      this.$nextTick(() => {

        const useSafeElement = document.querySelector('#useSafe');
        const footer = document.querySelector('#footer');      

        if (this.currentPath === '/intro' || this.currentPath === '/'){
          footer.style.top = '0';
        } 
        else {
          footer.style.top = ''
        }

        // #useSafe 라는 엘리먼트가 존재할 때! true일 때!
        if (useSafeElement) {
          if (this.currentPath === '/intro') {
            // 요소의 top 위치 계산
            const topPosition = useSafeElement.getBoundingClientRect().top + window.scrollY; 
            window.scrollTo({ top: topPosition, behavior: 'smooth' });
          }
        }

        // 주소 파라미터가 "/login"일 때
        if (this.currentPath === '/login' || this.currentPath === '/sign' || this.currentPath === '/mypage'){
          this.headerShow = false;
          this.footerShow = false;
        }

        if (this.currentPath === '/map' || this.currentPath === '/error'){
          this.footerShow = false;
        }

        if (this.currentPath === '/noticdetail'){
          footer.style.position= 'relative';
        }

      });
    }, 
  },

  methods: {
    //  this.$emit('logInOut', '로그아웃');     
    //  login.vue === > '로그인' : data
    //  myPage.vue === > '로그아웃' : data
    logInOutEvent(data) {
      // console.log(data);
      this.appLogin = data;
    },
    NavToggleEvent(isToggle){
      if(isToggle){
        document.querySelector('body').style.overflow = 'hidden';
      } else {
        document.querySelector('body').style.overflow = '';
      }
    },
    showAlertEvt(show) {
      console.log("show event :: ", show);
      this.isShowAlert = show;
    },
    closeAlertEvt (e) {
      console.log("close event :: ", e);
      this.isShowAlert = false;
    }
  }
};
</script>
