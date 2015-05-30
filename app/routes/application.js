import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel : function () {
    return this.store.find('album').then(function () {
      return this.store.find('photo');
    }.bind(this));
  },

  redirect : function () {
      this.transitionTo('collections.index');
  },

  setupController: function (controller) {
    controller.set('albumList', this.store.all('album'))
              .set('photosAmount', this.store.all('photo').get('length'));
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
