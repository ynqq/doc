---
home: true
icon: home
title: 注意事项
heroText: 注意事项
actions:
  - text: ←Vue2组件
    link: /v2/
    type: primary

  - text: Vue3组件→
    link: /v3/
    type: primary
---

## 组件/工具文档内容

- 组件/工具说明
  > 描述该组件/工具的功能。  
  > 例如: xxxx
- 安装方式  
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
- 使用方法
  > 描述该组件/工具如何使用。  
  > 例如:
  ```js
  import xxx from 'xxx';
  import 'xxx/dist/style.css';
  ...
  app.use(xxx)
  ```
- 组件/工具属性
  > 组件需要描述 <Text>props</Text> 的<Text>类型、是否必填和默认值</Text>；  
  > 例如:
  ### textConfig <Badge text="必填可以使用该标签" />
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
  > 工具类<Text></Text>需要描述<Text>每个方法的功能、参数(ts 需要写明类型)和返回值</Text>。  
  > 例如:
- 组件方法
  > 描述通过 ref 可以调用的组件方法，需要写明<Text>每个方法的功能、参数(ts 需要写明类型)和返回值</Text>。
- 组件插槽
  > 描述组件各个插槽的作用。  
  > 作用域插槽需要描述清楚<Text>每一个参数的作用(ts 需要写明类型)</Text>。
- 更新记录
  > 描述每一次更新的时间、人员和更新内容。  
  :::info 例如: 
    ### v1.1.1

    1. 更新了 xxxxxxx
    2. 新增了 xxxxxxx
    3. 删除了 xxxxxxx

    <AuthorTime name="张三" time="2022-12-12"></AuthorTime>
  :::