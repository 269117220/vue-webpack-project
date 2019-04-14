const Controller = require('egg').Controller;

class interestController extends Controller {
    async fund() {
        const  { ctx, service } = this;
        const fundList = await service.interest.getFund();
        ctx.body = JSON.stringify(fundList);
        
    }
    async currFundValues() {
        const  { ctx, service } = this;
        const currFundValues = await service.interest.getCurrFundValues();
        ctx.body = JSON.stringify(currFundValues);
    }
}
module.exports = interestController;