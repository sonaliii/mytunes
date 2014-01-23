// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({


  // tagName: "table",

  // initialize: function() {
  //   this.render();
  // },

  // render: function(){
  //   // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
  //   // see http://api.jquery.com/detach/
  //   this.$el.children().detach();

  //   this.$el.html('<th>Library</th>').append(
  //     this.collection.map(function(song){
  //       return new LibraryEntryView({model: song}).render();
  //     })
  //   );
  // }

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