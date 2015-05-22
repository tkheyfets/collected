import DS from 'ember-data';

var Album = DS.Model.extend({
  name: DS.attr(),
  photos: DS.hasMany('photo')
});

Album.reopenClass({
  FIXTURES: [{
    id: 1,
    name: 'NYC'
  }, {
    id: 2,
    name: 'Animals'
  }, {
    id: 3,
    name: 'Nature'
  }]
});

export default Album;
