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
      code: `## Demo <FullScreen/>

::: vue-playground 代码演示 

@file App.vue

\`\`\`vue
\<script setup>
import { ref } from "vue";
import { xxx } from "Com";
import { initStyle } from "utils";
initStyle("/components/v3/xxx/style.css");

const list = ref([]);
const log = () => {
  console.log(list.value);
};
\<\/script>

<template>
  <div>
    <xxx v-model:value="list" />
  </div>
</template>
\`\`\`

@import

\`\`\`json
{
  "imports": {
    "Com": "/components/v3/xxx/index.es.js",
    "utils": "/utils/index.js"
  }
}
\`\`\`

@setting

\`\`\`json
{}
\`\`\`

:::
  `
    };
  },
};
</script>
  
  <style lang="scss" scoped></style>
  