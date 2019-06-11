const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const config = require('./config.js');
const { getEntries, entryHtmlPlugins, virtulaEntryPlugins} = require('./helpers/util');

let entries = getEntries();
module.exports = {
    entry: entries,
    output: {
        path: config.build.assetsRoot,
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
        ...virtulaEntryPlugins(entries),
        ...entryHtmlPlugins(entries),
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
            cacheGroups: {
                default: false,
                common: {
                    test: /[\\/]node_modules[\\/]((?!jspdf).)*\.js$/, // 排除 jspdf.debug.js
                    name: 'common',
                    chunks: 'all',
                    minChunks: 2,
                    enforce: true
                }
            }
        }
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, '../src'),
            'components': path.resolve(__dirname, '../src/common/components')
        }
    }
};
