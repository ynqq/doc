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

## 组件/工具文档内容 <Code-CopyBase/>

### 组件/工具说明 <Code-CopyIntroduce/>

> 描述该组件/工具的功能。  
> 例如: xxxx

### 安装方式 <Code-CopyInstall/>

> 写明组件/工具的安装方式，提供可以复制的代码块。  
> 例如:

```bash
pnpm install xxx --save
```

or

```bash
npm install xxx --save
```

or

```bash
yarn add xxx
```

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

::: info 获取操作数据

- 参数 1: 名称
  - 必填: 是
  - 类型: string
- 参数 2: 配置 xxx

  - 必填: 否
  - 类型: Options

    ```ts
    interface Options {
      data: string[];
    }
    ```

- 返回值: 操作的数据

  - 类型: Returns

    ```ts
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
