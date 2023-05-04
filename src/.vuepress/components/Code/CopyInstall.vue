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
\`\`\`bash
pnpm install xxx --save
\`\`\`

or

\`\`\`bash
npm install xxx --save
\`\`\`

or

\`\`\`bash
yarn add xxx
\`\`\`
`,
      };
    },
  };
</script>

<style lang="scss" scoped></style>
