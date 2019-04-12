const path = require('path');

module.exports = {
    dev: {
        // assetsSubDirectory: 'static',
        assetsPublicPath: 'js/',

    },
    build: {
        assetsRoot: path.resolve(__dirname, '../../server/app/public'),
        // assetsSubDirectory: 'static',
        assetsPublicPath: '',
        productionGzip: true,
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: process.env.npm_config_report
    }
}