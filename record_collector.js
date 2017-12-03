var _ = require("lodash");

var RecordCollector = function(cash){
  this.cash = cash;
  this.collection = [];
};

RecordCollector.prototype = {
  buy: function(record){
    this.collection.push(record);
  },
  sell: function(record){
    this.collection = _.reject(this.collection, record);
  }
}

module.exports = RecordCollector;
