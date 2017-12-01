var assert = require("assert");
var Record = require("../Record");

describe("Record", function(){

  var record;

  beforeEach(function(){
    record = new Record("Brand New", "Science Fiction", "Rock", 9.99);
  });

  it("should have an artist", function(){
    assert.strictEqual(record.artist, "Brand New");
  });
  it("should have a title", function(){
    assert.strictEqual(record.title, "Science Fiction");
  });
  it("should have a genre", function(){
    assert.strictEqual(record.genre, "Rock");
  });
  it("should have a price", function(){
    assert.strictEqual(record.price, 9.99);
  });




});
