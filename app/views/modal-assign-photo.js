import Ember from 'ember';

export default Ember.View.extend({

  _showDropdown : function () {
      this.$('.dropdown-collections').addClass('open');
  },

  _hideDropdown : function () {
      Ember.run.later(this, function () {
         this.$('.dropdown-collections').removeClass('open');
      }.bind(this), 250);      
  },

  pickedCollectionHasChanged : function () {
      if (!this.get('controller.pickedCollection')) {
        Ember.run.later(this, function () {
          this.$('input.collection-name').trigger('focus');
        }.bind(this), 50);    
        
      }
  }.observes('controller.pickedCollection'),

  didInsertElement : function () {
    this.$('input.collection-name')
        .on('focus', this._showDropdown.bind(this))
        .on('blur', this._hideDropdown.bind(this))
        .trigger('focus');
  },

  willDestroyElement : function () {
      this.$('input.collection-name')
        .off('focus', this._showDropdown.bind(this))
        .off('blus', this._hideDropdown.bind(this));

      this.removeObserver('controller.pickedCollection', this, this.pickedCollectionHasChanged);
      this.set('controller.pickedCollection', null);

  },

  classNames: ['wrapper-modal-assign-photo'],

  photo: Ember.computed.alias('controller.model'),

  trimmedCollectionName : function () {
      let collectionName =  this.get('collectionName');
      return !!collectionName ? collectionName.trim() : '';
  }.property('collectionName'),

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
