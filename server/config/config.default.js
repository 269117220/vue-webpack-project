
const path = require('path');

module.exports = function(appInfo) {

    const config = exports = {};

    config.keys = 'wjabc123';
    
    config.news = {
        pageSize: 5,
        serverUrl: 'https://hacker-news.firebaseio.com/v0',
    };
    
    //【内置】egg-static插件
    config.static = {
        prefix: '/',   //访问前缀，与dir映射
        dir: path.join(appInfo.baseDir, 'app/public')
    }
    
    // add middleware robot
    config.middleware = [
        'robot'
    ];
    // robot's configurations
    config.robot = {
        ua: [
            /Baiduspider/i,
        ]
    };

    return config;
}
