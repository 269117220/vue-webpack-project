const fs = require('fs');
const path = require('path');

module.exports = {
    async html(relativePath) {
      // this 就是 ctx 对象，在其中可以调用 ctx 上的其他方法，或访问属性
        const absPath = path.join(__dirname, '../', relativePath);
        let isExist = await new Promise(resolve => fs.exists(absPath, resolve));
        if(isExist) {
            this.response.type = 'html';
            this.response.body = fs.createReadStream(absPath);
        }
    }
};