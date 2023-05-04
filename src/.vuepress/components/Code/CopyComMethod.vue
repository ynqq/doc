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
      code: `## 组件方法

### getData

::: info 获取操作数据

- 参数 1: string
- 参数 2: Options

  \`\`\`ts
  interface Options {
    data: string[];
  }
  \`\`\`

- 返回值: Returns

  \`\`\`ts
  type Returns = Options[];
  \`\`\`

:::
`,
    };
  },
};
</script>

<style lang="scss" scoped></style>
