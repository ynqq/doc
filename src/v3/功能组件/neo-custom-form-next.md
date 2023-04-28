---
title: 自定义拖拽表单
---
# @neotrident/neo-custom-form-next

## 安装



## 使用

1. 在main.ts里面引入
```js
import NeoCustomFormNext from '@neotrident/neo-custom-form-next';
import '@neotrident/neo-custom-form-next/dist/style.css';
...
app.use(NeoCustomFormNext)
```

2. 类型支持
```js
export interface GlobalComponents {
    NeoCustomFormNext: typeof import('@neotrident/neo-custom-form-next/dist/packages/CustomForm/index.vue')['default'];
}
```

3. 使用案例
```html
<NeoCustomFormNext v-model:value="data" :header="getHeader" :upload-action="webConfig.api.sip + '/api/File/upload'">
    <template #preset-fields>
    <div></div>
    </template>
</NeoCustomFormNext>
```

## 属性

| 名称 | 类型 | 默认值 | 说明 |
| :------ | :------ | :------ | :------ |
| value | (ModalItemProps\|ContainersProps)[] | [] | 绑定数据 |
| uploadAction | string | '' | 上传地址 |
| height | string | 100% | 组件高度 |
| mode | "design" \| "edit" \| "view" | "design" | 模式 <br> design: 可以拖动 <br> edit: 不能拖动但是可以对表单进行写入 <br> view: 只能看，不能拖动，不能写入|
| lang | "zh-CN" | "en-US" | "zh-CN" | 语言类型 |
| langPackage | {} | {} | 语言包<br>可以用来替换默认的语言包 |
| header | ()=>AxiosHeader | ()=>{} | 上传文件时的header |
| hasColon | boolean | false | 是否在表单label后面加入: <br>例如: 姓名: |
| domain | string | '' | 文件预览时的域名 |
| uploadInfo | UploadInfoProps |  | 文件上传信息 <br> statusKey: 上传接口返回的状态key名<br>successValue: 成功时的状态值 <br> uploadFileName: 上传文件的名称(不传默认为文件名称) |

## 插槽

| 名称 | 说明 |
| :--- | :--- |
| preset-fields | 表单标题 |

## 更新记录