import Ember from 'ember';

export default Ember.View.extend({

  didInsertElement : function () {
    this.$('input.collection-name').trigger('focus');
  },

  classNames: ['wrapper-modal-assign-photo'],

  photo: Ember.computed.alias('controller.model'),

  collectionList : function () {
  	  let albums = this.get('photo.albums');
      return !!albums.length ? albums.getEach('name').join(', ') : '';
  }.property('photo.albums.@each'),

  freeCollections : function () {
  		let currentAlbums = this.get('photo.albums').getEach('id');
  		return this.get('controller.controllers.application.albumList').filter(function (album) {
  			return 	currentAlbums.indexOf(album.get('id')) === -1;
  		}.bind(this));
  }.property('photo.albums.@each', 'controller.controllers.application.albumList.@each')


});
