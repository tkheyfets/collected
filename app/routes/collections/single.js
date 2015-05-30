import Ember from 'ember';

export default Ember.Route.extend({

  renderTemplate: function() {

    this.render('photos', {
      templateName: 'photos',
      controller: 'photos'
    });
  },

  setupController : function () {
        let params = this.paramsFor('collections.single'),
        appController = this.controllerFor('application'),
        album = this.store.all('album').findBy('id', params.id);

    appController.set('currentAlbum', album);
  },

  model: function (params) {
    return this.modelFor('collections.index').filter(function (photo) {
        return photo.get('albums').getEach('id').contains(params.id);
      });
  }
});
