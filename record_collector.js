var _ = require("lodash");

var RecordCollector = function(cash){
  this.cash = cash;
  this.collection = [];
};

RecordCollector.prototype = {
  buy: function(record){
    if (this.cash >= record.price){
      this.cash = Math.round(this.cash - record.price);
      this.collection.push(record);
    }else{
      return "Sorry you can't afford this";
    }
  },
  sell: function(record){
    this.cash += Math.round(record.price);
    this.collection = _.reject(this.collection, record);
  },
  value: function(){
    return _.sumBy(this.collection, "price");
  }
}

module.exports = RecordCollector;
