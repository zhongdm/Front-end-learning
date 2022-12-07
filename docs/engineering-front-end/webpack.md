# Webpack

1. "main" - require('webpack')的入口, "bin" - npm scripts中的命令的入口;
2. require.resolve('') - 查询模块的完整路径;
3. magic comment:
    ```
    import (
      /* webpackChunkName: "app" */
      './aa.js').then(res => {
    })
    ```

### 连接本地的webpack，进行调试
    ```
    $ npm install ndb
    $ npm link 本地webpack的仓库副本地址
    $ ndb npx webpack
    ```
### 性能分析
#### 插件
  1. webpack-bundle-analyzer - 打包大小
  2. speed-measure-webpack-plugin - 打包时间
  3. hard-source-webpack-plugin - 为模块提供中间缓存

#### 性能优化的策略
1. 添加speed-measure-webpack-plugin - 定位打包时间比较长的模块
2. 替换ts-loader // ***从22mim => 19min***
  a. vue inspect > output.js // 查看使用ts-loader的rules
  b. vue.config.js
    ```
    chainWebpack: config => {
      config.module.rule('ts').uses.delete('ts-loader')
      config.module.rule('tsx').uses.delete('ts-loader')
    }
    ```
  c. 安装babel的typescript插件
    ```
    $ npm install --save-dev @babel/preset-typescript @babel/plugin-transform-typescript
    ```
  d. 修改babel.config.js
    ```
    module.exports = {
      presets: [
        '@vue/app',
        "@babel/preset-typescript"
      ],
      plugins: [
        "@babel/plugin-transform-typescript"
      ]
    }
    ```
  e. 如果你在代码中使用到了 jsx
    ```
    module.exports = {
      presets: [
        '@vue/app',
        ["@babel/preset-typescript", {
          "allExtensions": true,
          "isTSX": true
        }],
      ],
      plugins: [
        "@babel/plugin-transform-typescript"
      ]
    }
    ```

#### 分析地址：
  1. http://alexkuz.github.io/webpack-chart/
  ```
  $ webpack --profile --json > stats.json
  ```
  2. https://webpack.github.io/analyse/
  3. webpack-bundle-analyzer
  ```
  $ npm run build --report
  ```

#### TreeShaking工作原理
  1. Dead Code Elimination技术
  2. /*#__Pure__ */: 在调用语句前添加 /*#__PURE__*/ 备注，明确告诉 Webpack 该次函数调用并不会对上下文环境产生副作用
  3. 只对es6的import和export才可以出发该机制
  4. 

### webpack 5.0
1. ModuleFederationPlugin