var _ = require("lodash");

var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
};

RecordStore.prototype = {
  add: function(record){
    this.inventory.push(record);
  },
  getInventoryDetails: function(){
    var inventory = "";
    this.inventory.forEach(function(record){
      inventory += record.artist + " - " + record.title + ", ";
    })
    return inventory;
  },
  sell: function(record){
    this.balance += record.price;
    this.inventory = _.reject(this.inventory, record);
  }
};

module.exports = RecordStore;
