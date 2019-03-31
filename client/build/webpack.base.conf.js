const path = require('path');
const DIST_PATH = path.resolve(__dirname, '../../server/app/public');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: ['babel-polyfill', './src/pages/index.js'],
    // devtool: 'inline-source-map',
    output: {
        filename: 'js/bundle.js',
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
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vues': 'vue/dist/vue.esm.js'
        }
    }
};













