// app/service/news.js
const Service = require('egg').Service;
const request = require('request-promise');
const Config = require('./assets/config');
/**
 * 基本信息请求
 */
function configInfoReqs() {
  return Config.fundKeys.map(id => {
    return request.get({
      url:`http://fundgz.1234567.com.cn/js/${id}.js?rt=1555228693884`
    });
  }); 
}
/**
 * 历史净值请求
 */
function oldFundValuesReqs() {
  return Config.fundKeys.map(id => {
    return request.get({
      url: `https://fundmobapi.eastmoney.com/FundMApi/FundNetDiagram.ashx?FCODE=${id}&deviceid=Wap&plat=Wap&product=EFund&version=2.0.0`
    });
  })
}
/**
 * 实时估值请求
 */
function currFundValuesReqs() {
  return Config.fundKeys.map(id => {
    return request.get({
      url:`https://fundmobapi.eastmoney.com/FundMApi/FundValuationDetail.ashx?FCODE=${id}&deviceid=Wap&plat=Wap&product=EFund&version=2.0.0&_=1555235448593`
    });
  }); 
}

class InterestService extends Service {
  /**
   * 获取历史涨跌幅
   */
  async getOldFundValues() {
    let oldValues = oldFundValuesReqs();
    return await Promise.all(oldValues).then(res => {
      return res.map((item, index) => {
        item = JSON.parse(item || {});
        const fundcode = Config.fundKeys[index];
        return {
          fundcode,
          oldValues: item && item.Datas && item.Datas.slice(0, 3).reduce((pre, curr) => {
            return pre += '  .  ' + curr.JZZZL;
          }, '')
        };
      });
    });
  }
  /**
   * 获取基本信息
   */
  async getFund() {
    let requestList = configInfoReqs();
    let result = await Promise.all(requestList).then(res => {
      let fundInfos = {};
      fundInfos.list = res.map(item => {
        return item && JSON.parse(item.match(/jsonpgz\((.*)\)/)[1]);
      });
      return fundInfos;
    });
    /**
     * 基本信息拼凑历史涨跌幅
     */
    let oldValues = await this.getOldFundValues();
    result.list = result.list.map(currItem => {
      oldValues.some(_item => {
        if(currItem.fundcode == _item.fundcode) {
          currItem.oldValues = _item.oldValues;
          return true;
        }
      });
      return currItem;
    })
    return result;
  }
  /**
   * 获取当前实时估值
   */
  async getCurrFundValues() {
    let currFunds = currFundValuesReqs();
    return await Promise.all(currFunds).then(res => {
      return res.map(item => {
        item = JSON.parse(item || {});
        return item && item.Datas && item.Datas[0];
      });
    });
  }
  
}

module.exports = InterestService;