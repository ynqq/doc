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
      code: `## 更新记录

### v1.1.1

1. 更新了 xxxxxxx
2. 新增了 xxxxxxx
3. 删除了 xxxxxxx

<AuthorTime name="x" time="xxxx-xx-xx"></AuthorTime>
`,
    };
  },
};
</script>

<style lang="scss" scoped></style>
