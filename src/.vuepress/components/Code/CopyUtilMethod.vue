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

::: info 截取字符串并返回新的字符串

- 参数 1: 要截取的字符串
  - 必填: 是
  - 类型: string
- 参数 2: 开始下标
  - 必填: 是
  - 类型: number
- 参数 3: 截取数量(不传则截取至结尾)
  - 必填: 否
  - 类型: number
- 返回值: 新字符串
  - 类型: string

:::
`,
    };
  },
};
</script>

<style lang="scss" scoped></style>
