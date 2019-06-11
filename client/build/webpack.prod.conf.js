const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const CleanCSSPlugin = require("clean-css");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = require('./config.js');

const webpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    devtool: config.build.devtool,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', 
                    {
                        loader: 'less-loader', 
                        options: {
                            plugins: [
                                new CleanCSSPlugin({ advanced: true })
                            ]
                        }
                    }]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ]
});

if (config.build.productionGzip) {
    //添加gzip压缩插件
    const CompressionWebpackPlugin = require('compression-webpack-plugin')

    webpackConfig.plugins.push(
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp(
          '\\.(' +
          config.build.productionGzipExtensions.join('|') +
          ')$'
        ),
        threshold: 10240, //阈值
        minRatio: 0.8
      })
    )
}

if (config.build.bundleAnalyzerReport) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig;