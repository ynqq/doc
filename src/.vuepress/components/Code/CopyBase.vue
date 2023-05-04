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
      code: `---
title: 组件/工具标题
author: 作者
---
`,
    };
  },
};
</script>

<style lang="scss" scoped></style>
