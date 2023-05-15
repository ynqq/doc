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
      code: `## 源码地址
<Source href="xxx" />

`,
    };
  },
};
</script>

<style lang="scss" scoped></style>
