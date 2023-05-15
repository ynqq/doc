---
title: 自定义表单
author: 秦家慧
---

## Demo <FullScreen/>

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

## 组件说明

可拖拽自定义表单

## 安装方式

::: tabs
@tab pnpm

```bash
pnpm install @neotrident/neo-custom-form-next --save
```

@tab npm

```bash
npm install @neotrident/neo-custom-form-next --save
```

@tab yarn

```bash
yarn add @neotrident/neo-custom-form-next
```

:::

## 使用方法

> 1.  在 main.ts 里面引入

```js
import NeoCustomFormNext from '@neotrident/neo-custom-form-next';
import '@neotrident/neo-custom-form-next/dist/style.css';
...
app.use(NeoCustomFormNext)
```

> 2.  类型支持

```js
export interface GlobalComponents {
    NeoCustomFormNext: typeof import('@neotrident/neo-custom-form-next/dist/packages/CustomForm/index.vue')['default'];
}
```

> 3.  使用案例

```html
<NeoCustomFormNext
  v-model:value="data"
  :header="getHeader"
  :upload-action="webConfig.api.sip + '/api/File/upload'"
>
  <template #preset-fields>
    <div></div>
  </template>
</NeoCustomFormNext>
```

## 组件属性

### value <Badge text="必填" />

::: info 自定义表单的数据

- 类型: (ModalItemProps | ContainersProps) []

  ```ts
  export interface ModalItemProps {
    isTem?: boolean;
    id: number;
    type:
      | "input"
      | "textarea"
      | "select"
      | "multiple"
      | "radio"
      | "checkbox"
      | "date"
      | "inputNumber"
      | "email"
      | "link"
      | "attachment"
      | "container2"
      | "container3";
    title: string;
    model?: string | string[] | number | number[] | undefined;
    icon?: any;
    placeholder?: string;
    action?: string;
    nameMapping?: string;
    urlMapping?: string;
    fileName?: string;
    defaultList?: any[];
    value?: ModalValueProps[];
    format?: any;
    formatOptions?: any[];
    append?: string;
    prepend?: string;
    hasSuffix?: boolean;
    suffixOptions?: boolean[];
    columns?: ContainerColumnsProp;
  }

  export interface ContainerColumnsProp {
    l: ModalItemProps[];
    m?: ModalItemProps[];
    r: ModalItemProps[];
  }

  export interface ContainersProps {
    id: number;
    type: string;
    columns: ContainerColumnsProp;
    title: string;
  }
  ```

:::

### uploadAction

::: info 上传地址

- 类型: string
- 默认值: ''
  :::

### height

::: info 组件高度

- 类型: string
- 默认值：'100%'
  :::

### mode

::: info 组件模式

- 类型:
  - design: 可以拖动
  - edit: 不能拖动但是可以对表单进行写入
  - view: 只能看，不能拖动，不能写入
- 默认值: 'design'
  :::

### lang

::: info 语言类型

- 类型: "zh-CN" | "en-US"
- 默认值: "zh-CN"
  :::

### langPackage

::: info 语言包,可以用来替换默认的语言包

- 类型: object
- 默认值: {}
  :::

### header

::: info 请求接口时的 header

- 类型: () => AxiosHeader
- 默认值: () => ({})
  :::

### uploadInfo

::: info 文件上传信息

- 类型: UploadInfoProps

  ```ts
  export interface UploadInfoProps {
    statusKey: string; // 上传接口返回的状态 key 名
    successValue: number; // 成功时的状态值
    uploadFileName: string; // 上传文件的名称(不传默认为文件名称)
  }
  ```

- 默认值:

  ```js
  {
      statusKey: "Status",
      successValue: 1,
      uploadFileName: "",
  }
  ```

:::

### hasColon

::: info 是否在表单 label 后面加入: 例如: 姓名:

- 类型: boolean
- 默认值: false
  :::

### domain

::: info 文件预览时的域名

- 类型: string
- 默认值: ''
  :::

## 组件事件

### change

::: info change 事件

- 参数: Values

  ```ts
  interface Values {
    data: string[];
  }
  ```

:::

## 组件方法

### getData

::: details 获取操作数据

```ts
/**
 * @param str xxx
 * @param options xxx
 * @returns xxx
 */
function getData(str: string, options: Options): Returns;

interface Options {
  data: string[];
}

type Returns = Options[];
```

:::

## 组件插槽

### preset-fields

::: info 表单标题
:::

### slot1

::: info 作用域插槽 1

- 参数: Slots

  ```ts
  interface Slots {
    data: Row;
  }
  ```

:::

## 源码地址

<Source href="http://gitlab.ilabpower.devops/neotrident/fe-components-vue3/-/tree/qjh_dev" />

## 更新记录

### v1.1.1

1. 更新了 xxxxxxx
2. 新增了 xxxxxxx
3. 删除了 xxxxxxx

<AuthorTime name="张三" time="2022-12-12"></AuthorTime>
