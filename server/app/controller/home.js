const Controller = require('egg').Controller;

const path = require('path');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.html('/public/index.html');
  }
}

module.exports = HomeController;