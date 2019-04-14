const Controller = require('egg').Controller;

class interestController extends Controller {
    async fund() {
        const  { ctx, service } = this;
        const fundList = await service.interest.getFund();
        ctx.body = JSON.stringify(fundList);
        
    }
}
module.exports = interestController;