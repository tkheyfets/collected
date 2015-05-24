import Ember from 'ember';

export default Ember.ArrayController.extend({

  needs : ['application'],

  appController : Ember.computed.alias('controllers.application'),

  actions: {
    removeFromCollection : function (photo) {
      let currentAlbum = this.get('appController.currentAlbum');
      currentAlbum.get('photos').removeObject(photo).save();
    }
  }
});
