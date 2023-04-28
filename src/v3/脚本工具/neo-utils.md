#### 概述
	一个通用的js 工具类、
###### 2020-12-21
1、修改business.removeCookies方法。新增删除 EDM 系统中需要的两个cookie
2、修改business.removeCookies方法。对传入的cookies参数重命名为cookiesArray

###### 2020-12-21
1、修改business.removeCookies方法。添加cookies参数
###### 2020-09-29
1、修改business.getDomain方法。如果域名是ip时，返回不带端口号的ip

###### 2020-09-17
1、添加business.formatNull2Empty 格式化对象， 将属性为null的格式化为''

###### 2020-07-16
1、添加business.off 事件解绑函数

###### 2020-06-16
1、修改object中的deepClone方法
###### 2020-06-01 
1、修改array中的getItem方法

###### 2020-06-01 
1、添加array.sortArr ,array.sortArrObj 数组排序方法

###### 2020-05-19
1: 添加business.on

###### 2020-05-07
1: 添加business.getDomain

###### 2020-04-21
1: 添加object.revalueKeys
1: 添加business.setUcStorage
1: 添加business.setCimsStorage
	

#### 参考
https://jofunliang.github.io/usuallyjs/


#### 安装方式
     <script src="./utils.min.js"></script>
     import utils from "neo-utils"
    

#### 示例

   ```javascript
<template>
<div id="app">
    
</div>
</template>

<script>
import utils from "neo-utils"

export default {
    name: 'app',
    mounted(){
        console.log(utils)
    }
}
</script>
```
    
#### API
##### 待续

