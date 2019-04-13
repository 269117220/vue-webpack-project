const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const CleanCSSPlugin = require("less-plugin-clean-css");
const webpack = require('webpack');
const config = require('./config.js');
const proxy = require('../config/proxy-rules');

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: config.dev.devtool,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader', 
                    {
                        loader: 'less-loader', 
                        options: {
                            plugins: [
                                new CleanCSSPlugin({ advanced: true })
                            ]
                        }
                    }]
            }
        ]
    },
    devServer: {
        contentBase: config.build.assetsRoot,
        historyApiFallback: true,
        port: '8889',
        overlay: true,
        hot: true,
        compress: true,
        open: true,
        proxy
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});

