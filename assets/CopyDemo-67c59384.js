import t from"./Copy-3cdcdeee.js";import{_ as s,X as n,a6 as p,E as r}from"./framework-88257335.js";const i={components:{Copy:t},data(){return{code:`## Demo <FullScreen/>

::: vue-playground 代码演示 

@file App.vue

\`\`\`vue
<script setup>
import { ref } from "vue";
import { xxx } from "Com";
import { initStyle } from "utils";
initStyle("/components/v3/xxx/style.css");

const list = ref([]);
const log = () => {
  console.log(list.value);
};
<\/script>

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
  `}}};function c(l,m,u,a,o,x){const e=r("Copy");return n(),p(e,{code:o.code},null,8,["code"])}const v=s(i,[["render",c],["__file","CopyDemo.vue"]]);export{v as default};
