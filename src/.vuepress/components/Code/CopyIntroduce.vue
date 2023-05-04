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
      code: `## 组件说明
xxx
`,
    };
  },
};
</script>

<style lang="scss" scoped></style>
