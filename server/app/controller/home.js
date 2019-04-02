const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('app/public/index.html');
    // ctx.response.body = await ctx.html('public/ad-contract-mgmt/index.html');
    // await this.ctx.response('public/index.html');
  }
}

module.exports = HomeController;