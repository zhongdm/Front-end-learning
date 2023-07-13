
### 性能优化
  1. 避免频繁使用pagescroll
  2. 定时器
  3. 高效加载第三方脚本 - [Chrome Developers](https://developer.chrome.com/)
    + 对script标记添加async或者defer
      - defer: 不会阻塞页面的解析渲染
      - async： 下载不会阻塞解析渲染，执行会阻塞解析渲染
    + 提早连接 - preconnect / dns-prefetch
    + 延迟加载
    ![script async](/Users/meimei/Documents/miyazdm.github.io/Front-end-learning/docs/img/script_async.webp)
  4. 
    + html - minify + compress + cache
    + css - render blocing - add "media" attribute
      <link ref="" media="print ">
  5. 