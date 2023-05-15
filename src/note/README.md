---
home: false
icon: home
sidebar: false
title: 注意事项
heroText: 注意事项
actions:
  - text: ←Vue2组件
    link: /v2/
    type: primary

  - text: 脚本工具↓
    link: /utils/
    type: primary

  - text: Vue3组件→
    link: /v3/
    type: primary
---

## 组件/工具文档<Text>应包含以下内容</Text> <Code-CopyBase/>

### Demo <Code-CopyDemo/> <FullScreen/>
> 提供一个可以预览的demo，快速了解该组件的功能。  
> 例如: 

::: vue-playground 代码演示 

@file App.vue

```vue
<script setup>
import { ref } from "vue";
import { CustomForm } from "Com";
import { initStyle } from "utils";
initStyle("/components/v3/neo-custom-form-next/style.css");

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
    "Com": "/components/v3/neo-custom-form-next/index.es.js",
    "utils": "/utils/index.js"
  }
}
```

@setting

```json
{}
```

:::

### 组件/工具说明 <Code-CopyIntroduce/>

> 描述该组件/工具的功能。  
> 例如: xxxx

### 安装方式 <Code-CopyInstall/>

> 写明组件/工具的安装方式，提供可以复制的代码块。  
> 例如:

::: tabs
@tab pnpm

```bash
pnpm install xxx --save
```

@tab npm

```bash
npm install xxx --save
```

@tab yarn

```bash
yarn add xxx
```
:::

### 使用方法 <Code-CopyComUse/>

> 描述该组件/工具如何使用。  
> 例如:

```js
import xxx from 'xxx';
import 'xxx/dist/style.css';
...
app.use(xxx)
```

### 组件属性 <Code-CopyComProps/>

> 需要描述 <Text>props</Text>的 <Text>类型、是否必填和默认值</Text>；  
> 例如:

#### textConfig <Badge text="必填(可以使用该标签)" />

::: info 文字配置 --此处可以直接写该参数的中文

- 类型: Props

  ```ts
  export interface Props {
    text: string; // 文本名称
    length: number; // 文本长度
  }
  ```

- 默认值:

  ```js
  {
    text: "asd";
    length: 3;
  }
  ```

:::

### 组件事件 <Code-CopyComEvent/>

> 描述组件 emit 的事件，需要写明<Text>每个事件的参数(ts 需要写明类型)</Text>。  
> 例如:

#### change

::: info change 事件

- 参数: 操作的数据

  - 类型: Values

    ```ts
    interface Values {
      data: string[];
    }
    ```

:::

### 组件方法 <Code-CopyComMethod/>

> 描述通过 ref 可以调用的组件方法，需要写明<Text>每个方法的功能、参数(ts 需要写明类型)和返回值</Text>。  
> 例如:

#### getData

::: details 获取操作数据

```ts
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
```

:::

### 组件插槽 <Code-CopyComSlot/>

> 描述组件各个插槽的作用。  
> 作用域插槽需要描述清楚<Text>插槽的参数(ts 需要写明类型)</Text>。  
> 例如:

#### slot1

::: info 作用域插槽 1xxxx

- 参数: Slots

  ```ts
  interface Slots {
    data: Row;
  }
  ```

:::

### 工具方法 <Code-CopyUtilMethod/>

> 工具类需要描述<Text>每个方法的功能、参数和返回值(ts 需要写明类型)</Text>。  
> 例如:

#### subStr

::: details 截取字符串并返回新的字符串

```ts
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
```

:::

### 源码地址 <Code-CopySource/>

> 提供源码地址，方便其他人一起维护或者提问题。  
> 例如:

<Source href="http://www.baidu.com" />

### 更新记录 <Code-CopyUpdateList/>

> 描述每一次更新的时间、人员和更新内容。  
> 例如:

#### v1.1.1

      1. 更新了 xxxxxxx
      2. 新增了 xxxxxxx
      3. 删除了 xxxxxxx

<AuthorTime name="张三" time="2022-12-12"></AuthorTime>
