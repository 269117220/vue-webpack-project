const path = require('path');

exports.pluginTest = {
    enable: true,
    path: path.join(__dirname, '../lib/plugin/echo_log')
    // package: '@kapp/nos',和path互斥
    // env: ['test', 'beta', 'pre', 'online', 'unittest', 'performance']
}