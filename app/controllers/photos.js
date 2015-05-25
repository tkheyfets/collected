import Ember from 'ember';

export default Ember.ArrayController.extend({

  needs : ['application'],

  appController : Ember.computed.alias('controllers.application'),
  currentAlbum: Ember.computed.alias('appController.currentAlbum'),

  actions: {

    assignPhotoToCollection : function (photo, album) {
        photo.get('albums').pushObject(album);
    },

    createCollection : function () {
       let name = prompt('Enter name for new collection');
       if (name.trim()) {
          var newCollection = this.get('store').createRecord('album', { name: name});
          this.transitionToRoute('index.collection', newCollection.get('id'));
       }
    },

    removeFromCollection : function (photo) {     
      let currentAlbum  = this.get('currentAlbum');
      photo.get('albums').removeObject(currentAlbum);
    },

    removeCollection : function (album) {
      album.deleteRecord();
      this.transitionToRoute('index.collections');
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
