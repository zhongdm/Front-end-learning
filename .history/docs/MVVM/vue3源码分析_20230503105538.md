###
1. vue3文件的入口：
  package.json中有"dev":"node scripts/dev.js",找到dev.js文件中的
  ```
  entryPoints: [resolve(__dirname, `../packages/${target}/src/index.ts`)]
  ```
  其中target默认是vue,所有依照路径找到index.ts入口

2. 组件化的创建过程
compile(template, opts) => new Function('Vue', code)(runtimedom) => runtimedom中createBaseVNode
compile: baseCompile -> baseParse, transform, generate

patch => processComponent => mountComponent


3. AST [在线转换](https://astexplorer.net/)
  + acornjs/acorn
  + 常见的ast节点类型：。。。
  + code => AST(Tokens => ast)
    - PS: Tokens之后会处理代码检查等操作
  + Identifer: BinaryExpression, ImportDeclaration等等
  + 比如ts转换成js，是通过typeAnnotation
  + Babel插件的使用
  ```
  export function functin(babel) {
    return {
      vistor: {
        Identifier(path, state){},
        ...
      }
    }
  }
  ```

