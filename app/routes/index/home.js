import Ember from 'ember';

export default Ember.Route.extend({

  renderTemplate: function() {
    this.render({
      outlet: 'main',
      controller: 'photos',
      model: this.modelFor('index.home')
    });
  },

  model: function () {
    return this.store.find('photo').then(function (data) {
      return data.filterBy('album', null);
    })
  }
});
