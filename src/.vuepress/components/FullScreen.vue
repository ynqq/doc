<template>
  <span class="fullScreenBtnBox" @click="handleToggleFull"> 全屏 </span>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleToggleFull() {
      const container = document.querySelector(".vue-playground-wrapper");
      if (!container) {
        alert("未查到代码演示容器！");
        return;
      }
      container.requestFullscreen();
    },
    handleFull() {
      if (document.fullscreenElement) {
        document.body.classList.add("fullScreen");
      } else {
        document.body.classList.remove("fullScreen");
      }
    },
  },
  mounted() {
    document.addEventListener("fullscreenchange", this.handleFull);
  },
  unmounted() {
    document.removeEventListener("fullscreenchange", this.handleFull);
  },
};
</script>

<style lang="scss" scoped>
.fullScreenBtnBox {
  font-size: 14px;
  float: right;
  cursor: pointer;
  color: #2980b9;
}
</style>