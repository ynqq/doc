---
title: neo-utils
---

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

### subStr2

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

### subStr3

::: tabs
@tab 功能
截取字符串并返回新的字符串
@tab 参数信息

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
