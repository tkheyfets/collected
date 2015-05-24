import Ember from 'ember';

export default Ember.Route.extend({

  renderTemplate: function() {

    let params = this.paramsFor('index.collection'),
        appController = this.controllerFor('application'),
        album = this.modelFor('index').findBy('id', params.id);

    appController.set('currentAlbum', album);

    this.render({
      outlet: 'main',
      controller: 'photos',
      model: this.currentModel
    });
  },

  model: function (params) {
    return this.modelFor('index').findBy('id', params.id).get('photos');
  }
});
