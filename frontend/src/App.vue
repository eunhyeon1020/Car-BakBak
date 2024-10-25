<template>
  <div id="app">
    <Header></Header>

    <router-view></router-view>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  data:() => ({
    currentPath : '',
  }),
  watch: {
   $route(to) {
      this.currentPath = to.path;

      window.scrollTo(0,0);

      this.$nextTick(() => {
        const useSafeElement = document.querySelector('#useSafe');
        
        const footer = document.querySelector('#footer');
        if (this.currentPath === '/intro' || this.currentPath === '/main'){
         footer.style.top = '0';
        } else footer.style.top = '';

        if (useSafeElement) {  
          if (this.currentPath === '/intro') {
            const topPosition = useSafeElement.getBoundingClientRect().top + window.scrollY; // 요소의 top 위치 계산
            window.scrollTo({ top: topPosition, behavior: 'smooth' });
          }
        }
      });
    },
  },
  methods: {
  }
};
</script>
