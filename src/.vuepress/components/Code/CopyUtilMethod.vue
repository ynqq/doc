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
      code: `## 方法

### subStr

::: details 截取字符串并返回新的字符串

\`\`\`ts
/**
 * @param str 要截取的字符串
 * @param startIndex 开始下标
 * @param subNum 截取数量(不传则截取至结尾)
 * @returns 新的字符串
 */
function subStr(
  str: string,
  startIndex: number,
  subNum?: number,
  xxx?: Returns
): string;

interface Returns {
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
