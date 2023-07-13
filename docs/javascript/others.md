
### Notification

### beforeinstallprompt事件 - 非标准特性
  - e: prompt(), platforms, userChoice.then(), outcome

### 异步
  + Promise.then
  + MutationObserver
  + setImmediate
  + setTimeout

### EventLoop

### Object.defineProperty & Proxy

### Lighthouse 审查网络应用
[访问地址](https://developers.google.com/web/tools/lighthouse/)

### 阻塞渲染的资源
  + js: ***defer***： 文档解析后再加载
    ```
    <script defer></script>
    ```
  + css: media
  ```
  <link ref="" media=""></link>
  ```

###支持可选链
1. 安装
```
$ npm install --save-dev @babel/plugin-proposal-optional-chaining
$ npm install --save-dev @babel/plugin-proposal-nullish-coalescing-operator
```
2. 在babel.config.js中配置：
```
plugins: [
  '@babel/plugin-proposal-optional-chaining',
  '@babel/plugin-proposal-nullish-coalescing-operator'
]
```

### 立即调用函数表达式(IIFE)
1. 写法:
    ```
    (function(){})();
    
    (() => {})();
    ```
1. 自执行匿名函数
2. 在定义时就会立即执行的js函数。

### 剪切&粘贴功能
1. navigator.clipboard.write/writeText("").then()
2. navigator.clipboard.read/readText().then(clipText => {})


### 不同分辨率
1. 
  ```
   const t = window.devicePixelRatio
   document.body.style.zoom = 1 / t
  ```

### viewport-fit - 设置可视视窗的大小
  auto
  cover
  contain

  iPhone x 的安全区域：constant() ， env()-推荐
  constant(safe-area-inset-top)：在Viewport顶部的安全区域内设置量（CSS像素）
  constant(safe-area-inset-bottom)：在Viewport底部的安全区域内设置量（CSS像素）
  constant(safe-area-inset-left)：在Viewport左边的安全区域内设置量（CSS像素）
  constant(safe-area-inset-right)：在Viewport右边的安全区域内设置量（CSS像素）

### 原生js
1. [object Array], [object Function], [object Object], [object String]
  ```
  Object.prototype.toString.call(obj) === '[object Array]'
  ```
2. typeof define === 'function' && define.amd ? define(factory) :
	factory();
  define是require.js中的一个关键字


### 性能优化
1. 避免频繁使用pagescroll
2. 定时器
3. 高效家在第三方脚本 - [Chrome Developers](https://developer.chrome.com/)
  + 对script标记添加async或者defer
    - defer: 不会阻塞页面的解析渲染
    - async： 下载不会阻塞解析渲染，执行会阻塞解析渲染
  + 提早连接 - preconnect / dns-prefetch
  + 延迟加载
4. 
  + html - minify + compress + cache
  + css - render blocing - add "media" attribute
    <link ref="" media="print ">
5. 