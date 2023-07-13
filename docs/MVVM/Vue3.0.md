
###
1. 对ts的处理
+ vue-tsc - 检查类型和生成类型声明文件
+ **vite-plugin-checker** - 可以在另一个worker现成里做静态检查

 
### Vite
1. 预构建 - 将依赖项转换为ES模块
- prod env: @rollup/plugin-commonjs

#### 配置
1. --config
```
$ vite --config 自定义名字.js
```

2. 
```bash
export default defineConfig({
  root: '',
  base: '',
  define: '', // 定义常量
  mode: '',
  publicDir: '',
  cacheDir: '',
  resolve: {
    alias: {

    },
    extensions: ['.js', ...],
    dedupe: '',
    conditions: '',
    preserveSymlinks: '',
    mainFields: ['browser', 'module', 'jsnext:main', 'jsnext']
  },
  css : {
    modules: '',
    postcss: '',
    preprocessorOptions: {
      // css预处理器
    }
    devSourceMap: boolean,
  },
  json: {
    nameExports: '',
    stringify: boolean
  },
  esbuild: {
    jsxInject: `import React from 'react'`
  },
  assetsInclude: '',
  customLogger: '',
  clearScreen: boolean,
  envDir: '',
  envPrefix: '',
  appType: 'spa'/'mpa'/'custom',
  logLevel: 'info'/'warn'/'error'/'silent',
  // 服务器配置
  server: {

  },
  // 构建配置
  build: {

  },
  preview: {

  },
  optimizeDeps: {

  },
  ssr: {

  },
  worker: {

  },
  plugins: [],

})


```


### 和Vue2.0的不同