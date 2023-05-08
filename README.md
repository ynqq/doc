# 文档系统说明

使用前可以参考<a target="_" href="">注意事项</a>栏

## 目录结构

```text
├── src
│   ├── cli → 存放cli相关的文档
│   ├── utils → 存放脚本工具相关的文档
│   ├── v2 → 存放Vue2组件的文档
│   ├── v3 → 存放Vue3组件的文档
│   ├── .vuepress → VuePress 配置文件夹
│   │   ├── dist → 构建输出目录
│   │   ├── components → 该文件夹下的组件会被自动注册，使用方式(<文件名 />, <文件夹名-文件名 />)
│   │   ├── navbar → 顶部导航栏配置文件
│   │   ├── public → 静态资源目录
│   │   ├── styles → 用于存放样式相关的文件
│   │   ├── config.ts → 配置文件的入口文件
│   │   ├── client.ts → 客户端文件
│   │   ├── theme.ts → 主题配置文件
```

## 使用方式

- 拉取代码包，然后在对应的文件夹(v3/v2/utils/cli...)创建对应的 md 文件然后编辑即可。
- 文档的具体内容可以参考注意事项一栏，点击模块旁边的复制代码可以直接复制当前模块的模板 MD 代码。
- 每个文档文件夹下的 README 文件可以用来配置当前菜单
  ```text
  ---
  title: 菜单名称
  author: 作者 不配置会读取theme.ts中的author配置
  index: false // 可以用来设置当前菜单下的排序顺序,不配置会按照文件名称排序。设置为false则不显示在左侧菜单栏中。
  dir:
      collapsible: false // 是否开启菜单折叠功能
  ---
  ```
- 每个文档可以增加以下的配置
  ```text
  ---
  title: 组件/工具的标题，侧边栏会根据该标题生成菜单名称，如果不配置将会抓取文档里面的第一个h1标签当做菜单名称
  author: 作者
  ---
  ```
- navbar 配置(已配置完成，<font color="red">写单个文档时不需要配置</font>。)
  > 配置地址: src\.vuepress\navbar
  > 图标可以参考<a href="https://theme-hope.vuejs.press/zh/guide/interface/icon.html#%E6%B5%8F%E8%A7%88%E5%9B%BE%E6%A0%87" target="_">内置 iconfont 图标</a>
  ```json
  {
    "text": "navbar名称",
    "icon": "图标",
    "link": "/v3/(src/文件地址后面不写具体md就会使用README.md文件当做首页)"
  }
  ```
- 菜单配置(已配置根据目录结构自动生成菜单，<font color="red">写单个文档时不需要配置</font>。)
  > vuepress-theme-hope 在 sidebar 中配置"structure"会根据目录结构自动生成菜单，该 navbar 下的 md 文件如果有文件夹会生成多层级的菜单，如果在最外层则生成一级菜单。

## 相关链接

1. <a href="https://v2.vuepress.vuejs.org/zh/" target="_">vuepress</a>
2. <a href="https://theme-hope.vuejs.press/zh/" target="_">vuepress-theme-hope</a>
