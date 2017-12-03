var assert = require("assert");
var RecordStore = require("../record_store");
var Record = require("../record");
var RecordCollector = require("../record_collector");

describe("Record Store", function(){
  var recordStore, record, record2, recordCollector;

  beforeEach(function(){
    recordStore = new RecordStore("Fopp", "Glasgow");
    record = new Record("Brand New", "Science Fiction", "Rock", 9.99);
    record2 = new Record("Of Monsters and Men", "Crystals", "Folk Rock", 8.99);
    recordCollector = new RecordCollector(30.00);
  });

  it("should have a record collection that starts empty", function(){
    assert.strictEqual(recordCollector.collection.length, 0);
  });
  it("should be able to buy records", function(){
    recordCollector.buy(record);
    assert.strictEqual(recordCollector.collection.length, 1);
  });
  it('should be able to sell records', function(){
    recordCollector.buy(record);
    recordCollector.sell(record);
    assert.strictEqual(recordCollector.collection.length, 0);
  });
  it("should have cash", function(){
    assert.strictEqual(recordCollector.cash, 30.00);
  });
  it("should have cash that increase and decreases with buying and selling");
  it("shouldn't be able to buy a Record if they can't afford it");
  it("should be able to view the total value of their collection");
  it("should be able to view the total value of all records of a given Genre");
  it("should be able to view their most valuable record");
  it("should be able to sort their records by value");
  it("should be able to compare the value of their collection with another RecordCollector");


})
