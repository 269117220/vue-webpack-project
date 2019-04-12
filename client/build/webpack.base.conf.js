const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const config = require('./config.js');

module.exports = {
    entry: ['babel-polyfill', 'whatwg-fetch', path.resolve(__dirname, '../src/index.js')],
    output: {
        path: config.build.assetsRoot,
        filename: 'js/[name].[chunkhash:16].js',
        chunkFilename: 'js/[id].js',
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
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
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname , '../src/template.html'),
            filename: './index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: false,
                removeAttributeQuotes: true
            }
        }),
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({

        })
    ],
    optimization: {
        minimizer: [
            new UglifyJSPlugin(),
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: true
                    ? {
                        map: { inline: false }
                    }
                    : {}
            })
        ],
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                
            }
        }
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
};













