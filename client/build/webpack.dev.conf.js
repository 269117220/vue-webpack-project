const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const CleanCSSPlugin = require("less-plugin-clean-css");
// const openPage = process.env.npm_config_entry ? proxy.rulesMap[process.env.npm_config_entry] : '';
const webpack = require('webpack');

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    output: {
        // publicPath: 'js/'
    },
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
        contentBase: path.join(__dirname, '../../server/app/public/'),
        historyApiFallback: true,
        port: '8888',
        overlay: true,
        hot: true,
        compress: true,
        open: true,
        proxy: {}
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});

