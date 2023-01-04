# Node.js

###
```
const express = require('express')
const app = express()

```

### 概念
1. express项目生成器
  ```
  $ express --view=pug <project-name>
  ```
2. 路由
  ```
  express.router()
  ```
3. 中间件
4. 静态文件（本地/服务器）
5. 错误处理
6. 模版引擎
  ```
  app.set('views', './views')
  app.set('view engine', 'pug')
  ```
7. 设置代理
```
app.set('trust proxy', '')
```
8. 集成数据库
9. process manager : PM2
  ```
  $ npm install -g pm2
  $ pm2 start app.js
  // 更新页面后
  $ pm2 reload all

  $ pm2 stop
  $ pm2 restart
  $ pm2 delete
  ```



### 常见问题
1. app.use, app.get 和router.use, router.get的区别:

2. 
