import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['panel', 'album-actions'],
  classNameBindings: ['notAlbum:u-hide'],
  notAlbum : function () {
    return !this.get('album.name') || !this.get('album.photos').length;
  }.property('album.name')
});
