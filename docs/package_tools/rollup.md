## rollup

### 惯例
1. 约定
+ 插件要有一个明确的名称，且以rollup-plugin-作为前缀

2. 可以编译成不同格式的代码包
  ```
  $ rollup sourcefile --file targetfile --format format
  # format的值可以为: iife, cjs, umd, es, system, amd

  // 
  $ rollup --config my.config.js
  # configName - 可以不填，如果不填，加载查找顺序是：
  # rollup.config.mjs -> rollup.config.cjs -> rollup.config.js
  $ rollup --config

  ```

3. 使用输出插件 - plugin hooks
   rollup-plugin-terser: 输出代码压缩

4. 代码分割
   

### Build Hooks
  + options
  + buildStart
  + watchChange
  + resolveId
  + resolveDynamicImport
  + load
  + transform
  + buildEnd
  + outputOptions
  

### 插件
A [rollup plugin list](https://github.com/rollup/awesome)

1. rollup-plugin-clear - 删除打包文件夹目录的插件
   ```
   // cleanPlugin.js
   core code:
   fs.statSync(path).isDirectory()
   fs.unlinkSync(path)
   fs.rmSync(path)
   ```
2. rollup-plugin-terser - 打包文件压缩插件
3. rollup-plugin-cleanup - 删除打包文件中的注释
4. 