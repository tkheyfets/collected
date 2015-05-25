import Ember from 'ember';

export default Ember.ArrayController.extend({

  needs : ['application'],

  appController : Ember.computed.alias('controllers.application'),
  currentAlbum: Ember.computed.alias('appController.currentAlbum'),

  actions: {
    removeFromCollection : function (photo) {
      let currentAlbum = this.get('currentAlbum');
      photo.get('albums').removeObject(currentAlbum);
      photo.save();
    },

    removeCollection : function (album) {
      album.deleteRecord();
      this.transitionToRoute('index.collections');
    },

    cleanCollection : function () {
      let currentAlbum = this.get('currentAlbum'),
          photos = this.get('currentAlbum.photos');

      photos.forEach(function (photo) {
        try {
          photo.get('albums').removeObject(currentAlbum);
        } catch(e){}
      });

      currentAlbum.save();
    }
  }
});
