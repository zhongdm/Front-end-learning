class TestPlugin {
  constructor() {
    console.log('Test plugin: constructor')
  }

  apply(compiler) {
    console.log('test plugin: apply started')
    compiler.hooks.compile.tap('TestPlugin', (compilationParams) => {
      console.log('test plugin: tap')
    })
  }
}
 
module.exports = TestPlugin