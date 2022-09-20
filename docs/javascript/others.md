
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