import Ember from 'ember';
import config from './config/environment';

let Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('collections', { path: '/' }, function () {
		this.route('single', { path: '/collections/:id' });
	});
});

export default Router;
