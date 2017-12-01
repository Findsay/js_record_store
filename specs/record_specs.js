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
  it("should have a title");
  it("should have a genre");
  it("should have a price");




});
