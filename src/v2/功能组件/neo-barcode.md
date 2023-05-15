## neo-barcode

## About
该控件主要是用于，生成二维码的小标签。可用于jQuery中，也可用于vue2.0的项目中。


## 说明

>如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR 👍

>1.具体的属性配置实例请参考examples中使用

>2.内置方法介绍
>  options中所有mm（毫米）的数据需要转换成px（像素）形式
>  mmConversionPx(value) : mm（毫米）转换为px（像素）
>  pxConversionMm(value) : px（像素）转换为mm（毫米）
>  getOptions() : 获取当前控件的配置信息

>3.Events方法介绍
>  @deleteComponent(item, index) ：删除控件回调 
>  @allowDrop(e) ：元素拖拽放置时回调
>  @handleDrop(e) ：元素拖动事件回调
>  @onActivated(item) ：组件点击回调
>  @onDeactivated ：组件失去焦点回调
>  @onResize(x, y, width, height) ：组件调整大小结束回调
>  @onResizing(x, y, width, height) ：组件拖动时的回调
>  @onDrag(x,y) ：组件拖动结束回调



## 项目运行
```
1.npm install

2.npm run serve 或 yarn serve

访问: http://localhost:800x
```

## 示例
请查看examples文件夹下面的事例代码。

## Reversion
-   v1.0.0 简单标签展示的功能。
-   v1.0.1 性能优化。
-   v1.0.2 性能优化。
-   v1.0.3 添加线宽控制，和比例放大的属性。
-   v1.0.4 修正部分数据没有深度拷贝的问题。
-   v1.0.5 修正放大后拖拽位置偏离的问题，以及组件宽高最小值问题。
-   v1.0.6 修改点击删除的式样。
-   v1.0.7 修改组件样式和拖拽问题。
-   v1.0.8 优化部分传参问题，使其更加灵活。
-   V1.0.9 修复一些已知bug1。
-   V1.1.0 修复一些已知bug2。
-   V1.1.1 修复一些已知bug3。
-   v1.1.2 添加遮罩层功能，通过type:readOnly开启
-   v1.1.4 优化数值变化的传参和计算方式。
-   v1.1.5 修复一些已知bug4。
-   v2.0.0 修复图片(base64)不显示的问题。
-   v2.0.1 二维码条形码改用矢量图。


