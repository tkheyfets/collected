import Ember from 'ember';

export default Ember.Route.extend({

  renderTemplate: function() {

    this.render('sidebar', { 
      outlet: 'sidebar',
      controller: 'application',
      into: 'application',
      model: this.currentModel
    });
  },

  model : function () {
    return this.store.all('album');
  }
});
