<template>
  <div id="app">
    <Header v-if="isShow"></Header>

    <router-view></router-view>

    <Footer v-if="isShow"></Footer>
  </div>
</template>

<script setup>
  // var variable = 10;
</script>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  // import 한 컴포넌트를 template에서 사용할 수 있게 해주는 부분 ( 태그로 사용 가능 )
  components: {
    Header,
    Footer,
  },

  // 변수의 초기 값을 지정해주는 부분
  data:() => ({
    currentPath : '',
    isShow: true, // Boolean : true / false
  }),
  
  // 데이터가 수시로 
  watch: {
    // 페이지 host 뒤에 오는 파라미터가 변화될 때 실행 (주소 뒤 /파라미터)
    $route(to) {  // to 는 route라는 라이브러리(모듈)
      this.isShow = true;
      this.currentPath = to.path; // '/map'

      window.scrollTo(0,0);

      this.$nextTick(() => {

        const useSafeElement = document.querySelector('#useSafe');
        const footer = document.querySelector('#footer');      

        if (this.currentPath === '/intro' || this.currentPath === '/main'){
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
          this.isShow = false;
        }

        if (this.currentPath === '/noticdetail'){
          footer.style.position= 'relative';
        }
      });
    },
  },

  methods: {
  }
};
</script>
