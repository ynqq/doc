---
title: neo-utils
---

## Demo <FullScreen/>

::: vue-playground 代码演示 

@file App.vue

```vue
<script setup>
import {getNowDate} from 'momentTest'
const log = () => {
  console.log(getNowDate());
};
</script>

<template>
  <div @click="log">获取当前日期
  </div>
</template>
```

@import

```json
{
  "imports": {
    "moment": "https://unpkg.com/moment@2.29.4/src/moment.js",
    "momentTest": "/doc/utils/momentTest/index.js"
  }
}
```

@setting

```json
{}
```

:::
  

## 工具说明

一个通用的 js 工具类、

## 安装方式

::: tabs
@tab pnpm

```bash
pnpm install  neo-utils --save
```

@tab npm

```bash
npm install  neo-utils --save
```

@tab yarn

```bash
yarn add  neo-utils
```

:::

## 使用方法

```js
import { xxx } from "neo-utils";
...
xxx('')
```

## 方法

### subStr

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

## 源码地址

<Source href="http://www.baidu.com" />

## 更新记录

### v1.1.1

1. 更新了 xxxxxxx
2. 新增了 xxxxxxx
3. 删除了 xxxxxxx

<AuthorTime name="张三" time="2022-12-12"></AuthorTime>
