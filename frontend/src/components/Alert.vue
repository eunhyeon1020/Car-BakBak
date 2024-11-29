
<template>
  <div id="alertModal" class="black-screen" v-if="showProp">
    <div class="alert-modal">
      <div class="alert-header">
        <span class="close-btn" @click="closeModal"></span>
      </div>
      <div class="alert-body">
        <div class="alert-img"></div>
        <div class="alert-content">{{ message }}</div>
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