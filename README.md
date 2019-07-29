# **VUE-WEBPACK-PROJECT**

## Usage
进入client文件夹
- 构建 : npm run build
- 本地开发： npm run dev

## 工程介绍
- 实时刷新&热更新
    - 使用 `--watch`监听文件重新打包 和 `tinylrs`监听文件变动刷新浏览器
    - 使用`devServer`开启服务，异步接口代理到node服务，html路径重定向到devServer管理的路径（本工程采用此方法）

## 记录
### 1. babel
    - **useBuiltIns的使用**
        - `usage：`引入core-js写入.babelrc文件。针对每个文件按需加载。【沙箱，不影响内置对象，和transform-runtime有些类似】
        - `entry：`需显示引入babel-pollyfill，会在引入时打散，根据target设置的浏览器环境进行引入。`We take advantage of the fact that a bundler will load the same polyfill only once.`

    - **transform-runtime**
        由于useBuiltIns的使用，其作用一般用于引用工具类方法取代使用前加载重复代码。

    - **babel-pollyfill**
        - 和`transform-runtime`都使用了`core-js`,不过比后者更全，包含对内置对象新API的支持。
        - 缺点：污染全局变量 & 打的包比较大

## 更新历史
- 19/3/31    `脚手架init`
- 19/4/1    `增加devServer & vue-router`


