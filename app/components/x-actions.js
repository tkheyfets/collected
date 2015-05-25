import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['panel', 'album-actions'],
  classNameBindings: ['notAlbum:u-hide'],

  notAlbum : function () {
    return !this.get('album.name');
  }.property('album.name'),

  actions : {
    remove: function (album) {
      this.sendAction('remove', album);
    },

    clean: function (album) {
      this.sendAction('clean', album);
    }
  }

});
