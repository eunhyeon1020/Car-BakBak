
<template>
  <div id="alertModal" class="black-screen" v-if="showProp">
    <div class="alert-modal">
      <div class="alert-header">
        <span class="close-btn" @click="closeModal"></span>
      </div>
      <div class="alert-body">
        <div class="alert-img"></div>
        <div class="alert-content">
          <div>{{ message }}</div>
          <div>보다 나은 서비스 제공을 위하여 준비 중입니다. </div>
          <div>빠른 시일내에 준비하여 찾아뵙겠습니다.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
    showProp: Boolean,  // App.vue 에서 false를 넘겨줌
  },
  methods: {
    closeModal(e) {
      this.$emit('closeAlert', e);
    },
  }
}
</script>