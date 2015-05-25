import Ember from 'ember';

export default Ember.Route.extend({

  renderTemplate: function() {

    let appController = this.controllerFor('application');

    appController.set('currentAlbum', { photos: this.currentModel });

    this.render('photos', {
      templateName: 'photos',
      controller: 'photos'
    });
  },

  model: function () {
    return this.store.all('photo');
  }
});
