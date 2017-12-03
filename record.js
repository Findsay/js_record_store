var Record = function(artist, title, genre, price){
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
};

Record.prototype = {
  getDetails: function(){
    var recordDetails = "";
    recordDetails = "artist: " + this.artist + ", title: " + this.title + ", genre: " + this.genre + ", price: " + this.price;
    return recordDetails;
  }
};

module.exports = Record;
