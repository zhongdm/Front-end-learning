# PWA



### PWA的优势
+ 缓存app shell， 并提升大量性能的方式管理动态内容
+ 添加到主屏幕(A2HS)
  - https服务
  - head头链接中有正确字段的manifest文件(***.webmanifest)
  ```
  <link rel="manifest" href="***.webmanifest">
  ```
  - 有合适的图标展示在主屏幕上
  - 该应用程序注册了SW
+ 推送通知

### 概念
+ App Shell 概念
  - 可链接
  - 渐进式
  - 响应式
    + viewport meta tag
    + css media
    + flexbox
    + css grid
  - 要求在网站开始呈现之前所有资源就已可用

+ Stream API
  - 可以立即开始

### SW
  基于https
  + 本地
  + github pages
 + 使用
  1. 注册
  ```
  serviceWorker.register('sw.js')
  ```

  2. 安装
  ```
  addEventListener('install', func)
  waitUntil
  ```

  3. 激活
  ```
  addEventListener('activate', func)
  ```

  4. 响应
  ```
  addEventListener('fetch', func)
  responseWith
  ```

  5. 推送
  ```
  addEventListener('push', func)
  ```

#### A2HS
  1. 准备条件
    https + ***.webmanifest + 合适的icon + sw
  2. 主页的html中引入***.webmanifest文件
    执行安装触发此事件：
    ```
    window.addEventListener('beforeinstallprompt', func)
    ```

#### 推送通知并启动
  + 通知API
    ```
    Notification.requestPermission().then() - 授权结果: default(默认), granted(允许), denied(拒绝)
    new Notification(title, options)
    ```

  + **推送API** - 没有明白
  [demo 地址](https://serviceworke.rs/push-payload_demo.html)



### 其他
+ 安装事件触发-window.addEventListener('beforeinstallprompt', (e) => {})