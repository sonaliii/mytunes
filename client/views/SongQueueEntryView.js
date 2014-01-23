// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  add: function(){
    console.log("adding");
    this.trigger('add', this);
  },

  remove: function(){
    console.log("adding");
    this.trigger('remove', this);
  }

});

