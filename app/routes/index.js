import Ember from 'ember';

export default Ember.Route.extend({

  renderTemplate: function () {
      this.render('sidebar', { outlet: 'sidebar'});
  },

  model: function () {
    return this.store.find('album');
  },

  afterModel : function () {
    this.transitionTo('index.home');
  }
});
