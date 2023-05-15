import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { resolve } from 'path'

export default defineUserConfig({
  base: "/",
  title: 'NEO自定义组件',

  locales: {
    "/": {
      lang: "zh-CN",
      description: "嘎嘎封装，嗷嗷开发。",
    },
  },

  theme,
  plugins: [
    registerComponentsPlugin({
      componentsDir: resolve(__dirname, './components') // 自动注册vue组件
    }),
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page: any) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
  ],
  // Enable it with pwa
  // shouldPrefetch: false,
});

