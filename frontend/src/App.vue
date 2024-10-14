<template>
  <div id="app">

    <Header></Header>
    
    <!-- 여기에 html 코드 작성하면 돼 -->    
    <Main>여기~!~!~!</Main>
    <!-- 여기에 html 코드 작성하면 돼 -->
    
    <Footer></Footer>

  </div>
</template>

<script>
  import Header from "@/components/Header.vue";
  import Main from "@/components/Main.vue";
  import Footer from "@/components/Footer.vue"

  export default {
    components: { Header, Main, Footer },
  }
</script>