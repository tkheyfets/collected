import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel : function () {
    return this.store.find('album').then(function (albums) {
      this.controllerFor('application').set('albumList', albums);
      return this.store.find('photo').then(function (photos) {
          this.controllerFor('application').set('photosAmount', photos.get('length'));
      }.bind(this));
    }.bind(this));
  },

  model : function () {
      return this.store.all('album');
  },

  redirect : function () {
      this.transitionTo('collections');
  },

	actions : {
     showModal : function (name, model) {
      return this.render(name, {
        into: 'application',
        outlet: 'modal',
        model: model
      });
    },

    removeModal: function() {
      this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }

});
