var assert = require("assert");
var RecordStore = require("../record_store");
var Record = require("../record");

describe("Record Store", function(){
  var recordStore;
  var record, record2;

  beforeEach(function(){
    recordStore = new RecordStore("Flopp", "Glasgow");
    record = new Record("Brand New", "Science Fiction", "Rock", 9.99);
    record2 = new Record("Of Monsters and Men", "Crystals", "Folk Rock", 8.99);
  });

  it("should have a name", function(){
    assert.strictEqual(recordStore.name, "Flopp");
  });
  it("should have a city", function(){
    assert.strictEqual(recordStore.city, "Glasgow");
  });
  it("should have an inventory, that starts empty", function(){
    assert.strictEqual(recordStore.inventory.length, 0);
  });
  it("should have a balance that starts at 0", function(){
    assert.strictEqual(recordStore.balance, 0);
  });
  it('should be able to add records to the inventory', function(){
    recordStore.add(record);
    assert.strictEqual(recordStore.inventory.length, 1);
  });
  xit("should be able to list the inventory", function(){
    recordStore.add(record);
    recordStore.add(record2);
    

  })
})
