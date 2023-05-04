---
title: 自定义密码输入框
author: xxx
---

## 组件说明

password

## 安装方式

```bash
pnpm install neo-password --save
```

or

```bash
npm install neo-password --save
```

or

```bash
yarn add neo-password
```

## 使用方法

## 组件属性

### uploadInfo <Badge text="必填" />

::: info 文件上传信息

- 类型: Props

  ```ts
  export interface Props {}
  ```

- 默认值:

  ```js
  {
  }
  ```

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

::: info 获取操作数据

- 参数 1: string
- 参数 2: Options

  ```ts
  interface Options {
    data: string[];
  }
  ```

- 返回值: Returns

  ```ts
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

## 源码地址

<Source href="xxx" />

## 更新记录

### v1.1.1

1. 更新了 xxxxxxx
2. 新增了 xxxxxxx
3. 删除了 xxxxxxx

<AuthorTime name="x" time="xxxx-xx-xx"></AuthorTime>
