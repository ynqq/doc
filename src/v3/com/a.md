---
title: a
---
## Demo <FullScreen/>

::: vue-playground 代码演示 

@file App.vue

```vue
<script setup>
import { ref } from "vue";
import { CustomForm } from "Com";
import { initStyle } from "utils";
initStyle("/doc/components/v3/neo-custom-form-next/style.css");

const list = ref([]);
const log = () => {
  console.log(list.value);
};
</script>

<template>
  <div>
    <button @click="log">获取数据</button>
    <CustomForm v-model:value="list" />
  </div>
</template>
```

@import

```json
{
  "imports": {
    "Com": "/doc/components/v3/neo-custom-form-next/index.es.js",
    "utils": "/doc/utils/index.js"
  }
}
```

@setting

```json
{}
```

:::
  