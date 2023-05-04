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
      code: `## 组件插槽

### preset-fields

::: info 表单标题
:::

### slot1

::: info 作用域插槽 1

- 参数: Slots

  \`\`\`ts
  interface Slots {
    data: Row;
  }
  \`\`\`

:::
`,
    };
  },
};
</script>

<style lang="scss" scoped></style>
