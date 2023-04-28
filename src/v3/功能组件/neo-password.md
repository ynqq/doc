# neo-password

# About
主要用在签名验证模块，解决了前端原生密码输入框不能阻止浏览器自动填充已完成密码这一痛点，基于公司目前使用的组件view-design(原iview)进行封装，
能够支持原有组件（https://iviewui.com/components/input）的全部功能，包括表单验证，配置api及props可以自行参考。


# 说明

>  如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR 👍


# 项目运行


```

npm install 或 yarn(推荐)

npm run serve 

访问: http://localhost:800x

```
#### 示例

```javascript
<template>
  <div>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <FormItem label="Input" prop="input">
        <neo-password v-model="formValidate.input" style="width: 200px" placeholder="Enter something..."></neo-password>
      </FormItem>
    </Form>
    <Button @click="submit">提交</Button>
  </div>
</template>

<script>
  import neoPassword from 'neo-password'
  Vue.use(neoPassword)
  export default {
    name: "App",
    data(){
      return {
        formValidate:{
          input:""
        },
        ruleValidate: {
          input: [
            {required: true, message: 'The input cannot be empty', trigger: 'blur'}
          ],
        }
      }
    },
    components: {
    },
    methods:{
      submit(){
        this.$refs['formValidate'].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      }
    }
  }
</script>
```

# Reversion
1.0.0 初始版，发布密码输入框组件
1.0.1 fix外部不能清空输入框bug

# License
MIT License
