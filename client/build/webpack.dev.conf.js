const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
// const openPage = process.env.npm_config_entry ? proxy.rulesMap[process.env.npm_config_entry] : '';

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    output: {
        filename: 'bundle.[chunkhash:16].js',
        publicPath: 'js/'
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
    }
});

