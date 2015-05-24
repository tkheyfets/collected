import Ember from 'ember';

export default Ember.Route.extend({

  renderTemplate: function() {
    let appController = this.controllerFor('application'),
        album = this.store.all('photo');

    appController.set('currentAlbum', { photos: album });

    this.render({
      outlet: 'main',
      controller: 'photos',
      model: this.currentModel
    });
  },

  model: function () {

    return this.store.find('photo');
  }
});
