const VirtualModulePlugin = require('virtual-module-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');

const path = require('path');
const glob = require('glob');
const os = require('os');
const sysType = os.type();
const isWins = sysType === 'Windows_NT';

function getEntryFileContent(vueFilePath) {
    vueFilePath = vueFilePath.replace(/\\/g, '/');
    return `
        import Vue from 'vue';
        import ElementUI from 'element-ui';
        import 'element-ui/lib/theme-chalk/index.css';
        import App from "${vueFilePath}";
        import eventBus from "@/plugin/eventBus";
        
        Vue.use(eventBus);
        Vue.use(ElementUI);
        
        new Vue({
            el: '#app',
            ...App,
            mounted() {
            function isMobile() {
                return !!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
            }
            this.$eventBus.$emit('currAgent', isMobile());
            window.onresize = () => {
                this.$eventBus.$emit('currAgent', isMobile());
            } 
            }
        });
    `;
};

module.exports = {
    getEntries() {
        const pagePath = path.resolve(__dirname, '../../src/pages');
        let filePaths = glob.sync(`${pagePath}/*/*.vue`);
        let entries = {};
        filePaths.forEach(filePath => {
            const dirPath = path.resolve(filePath, '../');
            const dirName = dirPath.substring(dirPath.lastIndexOf(isWins ? '\\' : '/')+1);
            const fileName = path.basename(filePath, '.vue');
            const entryFilePath = filePath.replace(/.vue/, '.js');
            entries[`${dirName}/${fileName}`] = isWins ? entryFilePath.replace(/\//g, '\\') : entryFilePath;
        });
        return entries;
    },
    entryHtmlPlugins(entries) {
        const htmlPlugins = [];
        const preloadPlugins = [];
    
        let entryNames = Object.keys(entries);
        entryNames.forEach(filename => {
            let chunks = ['common', filename];
    
            htmlPlugins.push(
                new HtmlWebpackPlugin({
                    template: path.resolve(__dirname , '../../src/template.html'),
                    filename: `${filename}.html`,
                    minify: {
                        removeComments: true,
                        collapseWhitespace: false,
                        removeAttributeQuotes: true
                    },
                    chunks     
                })
            );
            //反向排除页面
            const excludeHtmlNames = entryNames.filter(item => item !== filename).map(item => `${item}.html`);
            preloadPlugins.push(
                new PreloadWebpackPlugin({
                    rel: 'preload',
                    excludeHtmlNames,
                    include: [...chunks]
                })
            )
        });
    
        return [
            ...htmlPlugins,
            ...preloadPlugins
        ]
    
    },
    virtulaEntryPlugins(entries) {
        return Object.keys(entries).map((entry) => {
            let relativeEntryPath = entries[entry].replace(process.cwd(), '.')
            let entryName = entries[entry].replace(/.js/, '.vue');
            return new VirtualModulePlugin({
                moduleName: relativeEntryPath,
                contents: getEntryFileContent(entryName)
            });
        });
    }
}; 