import Ember from 'ember';

export default Ember.ArrayController.extend({

  needs : ['application'],

  appController : Ember.computed.alias('controllers.application'),
  currentAlbum: Ember.computed.alias('appController.currentAlbum'),

  actions: {
    removeFromCollection : function (photo) {

      let currentAlbum = this.get('currentAlbum');
      currentAlbum.get('photos').removeObject(photo).save();
    }
  }
});
