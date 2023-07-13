# REACT

### 创建项目并本地运行
  ```
  $ npx create-react-app *****
  $ cd *****
  $ npm start
  ```

#### 基本概念
  + state/setState
  + props
  + onClick
  + bind(this, ...)
  + () => {} - class fields
  + 函数式组件和类组件
  + 状态提升***

#### 受控组件 - Formik[https://jaredpalmer.com/formik]
#### 非受控组件
  + <input type="file"/>
#### 状态提升

#### 生命周期 （删除的生命周期：componentWillMount，componentWillReceiveProps ， componentWillUpdate）
+ getDerivedStateFromProps
+ shouldComponentUpdate
+ getSnapshotBeforeUpdate
+ render
+ componentDidMount
+ render
+ componnetDidUpdate
+ componentWillUnmount

#### 常用插件
+ react-router-dom
+ formik + yup
+ 

#### Important!!!
+ $$typeof - 防止XSS攻击

## React项目的组成
  + 表单: formik + yup 
  + *** - 表格
  + react hooks
    * useState
    * useEffect
    * useContext
    + useCallback - 保存函数，减少渲染次数，加快渲染效率
    + useMomo - 保存计算后的数据，减少渲染次数，加快渲染效率
    + 自定义hook
    + ...
  + React.lazy(() => import('./component)) - 动态加载组件
  + react-router-dom/react-router/react-router-native
  + redux + reduxjs/toolkit + react-redux
    *** state + view + actions ***
    1. 创建store - crateStore()
  + axios
  + mobx

## Hook
  - [x] **useState** - state
    ```
    const [name, setName] = useState(initValue)
    ```
  + [x] **useEffect** - 尽量不使用effect，低效并且复杂
    ```
    可看作以下三个生命周期的组合
    componentDidMount
    componentDidUpdate
    componentWillUnMount

    useEffect(() => {
      // logic
      return () => {
        // callback
      }
    }, params)
    params - 可防止无限循环
    ```
  + [x] **useContext** - 读取和订阅组件中的context
    可用户在组件 **深度** 读取外部数据
    ```
      const SomeContext = createContext(variant)
      const context = useContext(SomeContext)
    ```
  + [ ] useReducer
  + [ ] useCallback
    array变量的变化，会触发fn函数的执行
    ```
    const backFn = useCallback(fn, array)
    ```
  + [ ] useMemo - 缓存大体量的数据 - 性能优化 - 比如较大的数据量等
    仅适用于纯函数场景
  + [ ] useRef - 不要在渲染期间读取或写入ref数据
    ```
    useRef(value).current - 最好在useEffect中改变值，否则会引起无限循环
    ```
  + [ ] useImperativeHandle
  + [ ] useLayoutEffect
  + [ ] useDebugValue
  + [ ] useSyncExternalStore
  + [ ] useId - 生成唯一id
  + [ ] 
  + 自定义hook

## 内部组件
+ Suspense
+ Fragment
+ <> - 短标签
+ Portal
+ 

## 高阶组件
+ React.memo
+ 

## Examples:
### 九宫格数独

## 其他
+ http://httpbin.org/ - 测试axios请求

  ### React项目组成
+ react
+ react-dom
+ react-router && react-router-dom && useNavigate 
+ mobx
+ axios
  ```
  // axios.js
  axios.interceptors....
  在app.js中导入axios.js
  // businessApi.js
  export const getList = (params) => axios.get('', params)
  在具体使用的业务文件中引入该方法
  ```


## 补充
+ redux
  1. immutability

## 概念
  1. 合成事件
  2. 事件机制
  3. 错误异常处理
    ```
      1. ErrorBoundary
      2. 
        window.onerror
        fromEvent(window, 'click').subscribe(() => )
        addEventListener('error', )
        addEventListener('unhandledrejection', )
      3. try...catch
          async () => {
            try{}catch(err){}
          }
    ```

## 启动装饰器
1. 安装babel插件
```bash
$ npm install @babel/plugin-proposal-decorators
```
package.json中的配置：
```
"babel": {
  "plugins": [
    [
      "@babel/plugin-proposal-decorators": {"legacy": true}
    ]
  ]
}
```