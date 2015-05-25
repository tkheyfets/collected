import Ember from 'ember';

export default Ember.Route.extend({

  renderTemplate: function() {

    let params = this.paramsFor('index.collection'),
      appController = this.controllerFor('application'),
      album = this.modelFor('index').findBy('id', params.id);

    appController.set('currentAlbum', album);

    this.render('photos', {
      templateName: 'photos',
      controller: 'photos',
      model: this.currentModel
    });
  },

  model: function (params) {
    return this.modelFor('index.collections').filter(function (photo) {
      return photo.get('albums').getEach('id').contains(params.id);
    });
  }
});
