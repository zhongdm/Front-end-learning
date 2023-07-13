const pluginName = 'AnalyzeWebpackPlugin'

// 分析打包资源的大小
class AnalyzeWebpackPlugin {
  constructor() {

  }

  apply(compiler) {
    compiler.hooks.emit.tap(pluginName, (compilation) => {
      const assets = Object.entries(compilation.assets)

      let source = '# 分析打包资源大小 \n| 名称 | 大小 |\n| --- | --- |'
      assets.forEach(([filename, file]) => {
        source += `\n| ${filename} | ${file.size()}`
      })

      compilation.assets['analyze.md'] = {
        source() {
          return source
        },
        size() {
          return source.length
        }
      }
    })
  }
}

module.exports = AnalyzeWebpackPlugin