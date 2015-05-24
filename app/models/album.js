import DS from 'ember-data';

let Album = DS.Model.extend({
  name: DS.attr(),
  photos: DS.hasMany('photo')
});

Album.reopenClass({
  FIXTURES: [{
    id: 1,
    name: 'NYC',
    photos: []
  }, {
    id: 2,
    name: 'Animals',
    photos: []
  }, {
    id: 3,
    name: 'Nature',
    photos: []
  }]
});

export default Album;
