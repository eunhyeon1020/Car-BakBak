<template>
  <div id="header">
    헤더 영역
    <button @click="btnClick">서브 페이지로 이동</button>
    <router-link :to="'sub'">서브 페이지로 이동2</router-link>

  </div>
</template>

<script>
export default {
  methods: {
    btnClick() {
      console.log("this  ::", this);
      this.$router.push('sub');
    }
  }
}
</script>