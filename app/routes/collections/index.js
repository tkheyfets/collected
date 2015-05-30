import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate:  function () {
   this.render('photos', {
      templateName: 'photos',
      controller: 'photos',
      model: this.currentModel
    });
  },

  setupController : function (controller, model) {
     let appController = this.controllerFor('application');
     appController.set('currentAlbum', { photos: model });
  },

  model: function () {
    return this.store.all('photo');
  }

});