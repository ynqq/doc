<template>
  <span
    @click="handleCopy"
    :class="['copyBtn', success ? 'actived' : '', error ? 'error' : '']"
  >
    {{ copyText }}
  </span>
</template>

<script>
export default {
  props: {
    code: "",
  },
  computed: {
    copyText() {
      return this.error ? "复制失败" : this.success ? "复制成功" : "复制代码";
    },
  },
  data() {
    return {
      success: false,
      error: false,
    };
  },
  methods: {
    handleCopy() {
      if(this.success || this.error){
        return
      }
      try {
        var input = document.createElement("textarea");
        input.value = this.code;
        input.style.opacity = 0;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        this.success = true;
        setTimeout(() => {
          this.success = false;
        }, 2000);
        document.body.removeChild(input);
      } catch (error) {
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 2000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.copyBtn {
  margin-left: 10px;
  cursor: pointer;
  font-size: 14px;
  color: #2980b9;
  line-height: 28px;
  float: right;
  &.actived {
    cursor: not-allowed;
    color: #27ae60;
  }
  &.error {
    cursor: not-allowed;
    color: #d35400;
  }
}
</style>
