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
      code: `## 组件属性
### uploadInfo <Badge text="必填" />

::: info 文件上传信息

- 类型: Props

  \`\`\`ts
  export interface Props {
    
  }
  \`\`\`

- 默认值:

  \`\`\`js
  {
      
  }
  \`\`\`

:::
`,
    };
  },
};
</script>

<style lang="scss" scoped></style>
