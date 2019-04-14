#client

## NPM
npm-run-all：执行多个脚本（run-p dev:*）
## webpack
npm i -D webpack webpack-cli
npm i webpack-merge

## babel
npm i -D babel-loader @babel/core @babel/preset-env 
npm i -D @babel/plugin-transform-runtime 
npm i -S @babel/runtime

## 作为全局引入，entry （开发环境？）
npm i -D babel-polyfill

## vue
npm i -S vue
npm i -D vue-loader vue-template-compiler （`'vue$': 'vue/dist/vue.esm.js'`）

##webpack相关优化
cross-env：设置环境变量
***

添加hash值
***

html-webpack-plugin
clean-webpack-plugin
GIZ压缩： compression-webpack-plugin : 开发环境
分析工具：webpack-bundle-analyzer
***

//uglifyjs-webpack-plugin : js压缩
//optimize-css-assets-webpack-plugin ：css压缩
optimization: {
    minimizer: [
        new UglifyJSPlugin(),
        new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
        cacheGroups:{
            //JS、CSS
        }
    }
}
webpack-dev-server : devServer
***

【注意loader的加载顺序】
css-loader
style-loader ： 开发环境 
mini-css-extract-plugin : (抽取css到独立文件) 生产环境 / loader和plugin都要配置 / 和style-loader不同时用
***
