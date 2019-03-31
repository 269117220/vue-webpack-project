const merge = require('webpack-merge');
const path = require('path');
const baseWebpackConfig = require('./webpack.base.conf');
// const openPage = process.env.npm_config_entry ? proxy.rulesMap[process.env.npm_config_entry] : '';

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    output: {
        filename: 'bundle.js',
        publicPath: '/',
        chunkFilename: 'chunk_[name].js'
    },
    devServer: {
        openPage: 'view/',
        contentBase: path.join(__dirname, '../../server/app/public/'),
        historyApiFallback: true,
        port: '8080',
        overlay: true,
        hot: true,
        compress: true,
        open: true,
        proxy: {}
    }
});

