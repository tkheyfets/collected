import Ember from 'ember';
import config from './config/environment';

let Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', { path: '/' }, function () {
    this.route('collections');
    this.route('collection', { path: '/collections/:id'});
  });

});

export default Router;
