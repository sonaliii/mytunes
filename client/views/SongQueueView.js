// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  initialize: function() {

    this.collection.each(function(queuedSong) {
      var song = new SongQueueEntryView({ model: queuedSong });
      song.render();
    }, this);

    this.collection.on('add', function() {
      this.render();
    }, this);

    this.collection.on('remove', function() {
      this.render();
    }, this);

  },

  render: function() {
    return this.$el;
  }

});