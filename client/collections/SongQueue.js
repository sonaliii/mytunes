// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

    Songs.prototype.initialize.apply(this, arguments);

    this.on('add', function(song) {
      if (this.length === 1) {
        this.playFirst();
      } else {
        this.push(song);
      }
    }, this);

    this.on('remove', function(song) {
      this.remove(song);
    }, this);

    this.on('ended', function() {
      this.remove(this.at(0));
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song) {
      this.remove(song);
    }, this);

  },

  playFirst: function() {
    this.at(0).play();
  }

});