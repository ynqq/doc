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
      code: `## 组件事件

### change

::: info change 事件

- 参数: Values

\`\`\`ts
  interface Values {
    data: string[];
  }
\`\`\`
:::
`,
    };
  },
};
</script>

<style lang="scss" scoped></style>
