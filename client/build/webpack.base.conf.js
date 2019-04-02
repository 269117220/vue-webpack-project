const path = require('path');
const webpack = require('webpack');
const DIST_PATH = path.resolve(__dirname, '../../server/app/public/js');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
    entry: ['babel-polyfill', 'whatwg-fetch', path.resolve(__dirname, '../src/index.js')],
    output: {
        path: DIST_PATH
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader', 
                    'less-loader'
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({

        })
    ],
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
};













