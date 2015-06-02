import DS from 'ember-data';

let Album = DS.Model.extend({
  name: DS.attr(),
  photos: DS.hasMany('photo'),
  
  nameTotal : function () {
    return '%@ %@'.fmt(this.get('name'), this.get('photos.length'));
  }.property('name', 'photos.length')
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
