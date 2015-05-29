import Ember from 'ember';

export default Ember.Route.extend({

  renderTemplate: function() {

    let params = this.paramsFor('collection'),
        appController = this.controllerFor('application'),
        album = this.store.all('album').findBy('id', params.id);

    appController.set('currentAlbum', album);

    this.render('sidebar', { 
      outlet: 'sidebar',
      controller: 'application',
      into: 'application',
      model: this.store.all('album')
    });

    this.render('photos', {
      templateName: 'photos',
      controller: 'photos'
    });
  },

  model: function (params) {
    return this.modelFor('collections').filter(function (photo) {
        return photo.get('albums').getEach('id').contains(params.id);
      });
  }
});
