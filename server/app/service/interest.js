// app/service/news.js
const Service = require('egg').Service;

class NewsService extends Service {
  async getFund() {
    let data = await {list: [{title: '1'}, {title: '2'}]};
    return data;
  }
  
}

module.exports = NewsService;