// app/service/news.js
const Service = require('egg').Service;
const request = require('request-promise');
const Config = require('./assets/config');

function configInfo() {
  return Config.fundKeys.map(id => {
    return request.get({
      url:`http://fundgz.1234567.com.cn/js/${id}.js?rt=1555228693884`
    });
  }); 
}

function currFundValues() {
  return Config.fundKeys.map(id => {
    return request.get({
      url:`https://fundmobapi.eastmoney.com/FundMApi/FundValuationDetail.ashx?FCODE=${id}&deviceid=Wap&plat=Wap&product=EFund&version=2.0.0&_=1555235448593`
    });
  }); 
}

class InterestService extends Service {
  async getFund() {
    let requestList = configInfo();
    let result = await Promise.all(requestList).then(res => {
      let fundInfos = {};
      fundInfos.list = res.map(item => {
        return item && JSON.parse(item.match(/jsonpgz\((.*)\)/)[1]);
      });
      return fundInfos;
    });
    return result;
  }

  async getCurrFundValues() {
    let currFunds = currFundValues();
    let result = await Promise.all(currFunds).then(res => {
      let List = res.map(item => {
        item = JSON.parse(item || {});
        return item && item.Datas && item.Datas[0];
      });
      return List;
    });
    return result;
  }
  
}

module.exports = InterestService;