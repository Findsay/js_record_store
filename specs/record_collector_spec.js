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
    recordCollector = new RecordCollector();
  });

  it("should have a record collection that starts empty", function(){
    assert.strictEqual(recordCollector.collection.length, 0);
  });
})
