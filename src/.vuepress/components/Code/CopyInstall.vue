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
        code: `## 安装方式
::: tabs
@tab pnpm

\`\`\`bash
pnpm install xxx --save
\`\`\`

@tab npm

\`\`\`bash
npm install xxx --save
\`\`\`

@tab yarn

\`\`\`bash
yarn add xxx
\`\`\`
:::
`,
      };
    },
  };
</script>

<style lang="scss" scoped></style>
