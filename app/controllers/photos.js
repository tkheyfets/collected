import Ember from 'ember';

export default Ember.ArrayController.extend({

  needs : ['application'],

  appController : Ember.computed.alias('controllers.application'),
  currentAlbum: Ember.computed.alias('appController.currentAlbum'),
  albumList: Ember.computed.alias('appController.albumList'),

  actions: {

    createCollection : function () {
       let name = prompt('Enter name for new collection');
       if (name.trim()) {
          var newCollection = this.get('store').createRecord('album', { name: name});
          this.transitionToRoute('collections.single', newCollection.get('id'));
       }
    },

    removeFromCollection : function (photo) {     
      let currentAlbum  = this.get('currentAlbum');
      photo.get('albums').removeObject(currentAlbum);
    },

    removeCollection : function (album) {
      album.deleteRecord();
      this.transitionToRoute('collections.index');
    },

    cleanCollection : function () {
      let currentAlbum = this.get('currentAlbum');
      var photo = currentAlbum.get('photos.firstObject'); 
      
      while (!!photo) {
        this.send('removeFromCollection', photo);
        photo = currentAlbum.get('photos.firstObject');
      }
    }
  }
});
