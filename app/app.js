import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

Ember.LinkView.reopen({
  attributeBindings: ['data-title']
});

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
