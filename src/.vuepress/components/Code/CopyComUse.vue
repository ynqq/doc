<template>
  <Copy :code="code" />
</template>

<script>
import Copy from "./Copy.vue";

export default {
  components: {
    Copy,
  },
  data() {
    return {
      code: `## 使用方法
`,
    };
  },
};
</script>

<style lang="scss" scoped></style>
