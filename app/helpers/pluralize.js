import Ember from 'ember';

export function pluralize(len, singular, plural) {
  return len > 1 ? plural : singular;
}

export default Ember.HTMLBars.makeBoundHelper(pluralize);
