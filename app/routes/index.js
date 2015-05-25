import Ember from 'ember';

export default Ember.Route.extend({

  renderTemplate: function () {
      this.render('sidebar', { outlet: 'sidebar'});
  },

  beforeModel : function () {
    return this.store.find('album').then(function (data) {
      this.controllerFor('application').set('albumList', data);
      return this.store.find('photo');
    }.bind(this));
  },

  model: function () {
    return this.store.all('album');
  },

  redirect: function() {
    this.transitionTo('index.collections');
  }
});
