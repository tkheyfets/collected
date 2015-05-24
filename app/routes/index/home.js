import Ember from 'ember';

export default Ember.Route.extend({

  renderTemplate: function() {
    this.render('photos', {
      outlet: 'main',
      controller: 'photos'
    });
  },

  model: function () {
    return this.store.find('photo');
  }
});
