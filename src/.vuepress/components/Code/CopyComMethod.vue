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

::: details 获取操作数据

\`\`\`ts
/**
 * @param str xxx
 * @param options xxx
 * @returns xxx
 */
function getData(
  str: string,
  options: Options,
): Returns;

interface Options {
  data: string[];
}

type Returns = Options[];
\`\`\`

:::
`,
    };
  },
};
</script>

<style lang="scss" scoped></style>
