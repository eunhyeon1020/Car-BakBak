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
  mounted() {
    this.footerHeight();
  },
  methods: {
    footerHeight() {
      /* 
        나중에 여기에
        .intro-contain 클래스 다 가져와서 몇개인지 length 추출.
        #footer 아이디로 document 가져와서 footer.style.top = introContain의 length * 100vh
      */
    },
  },
};
</script>
