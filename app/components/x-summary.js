import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['panel'],
  actions : {
    remove: function (album) {
      if (confirm('Are you certain that you want to remove %@?'.fmt(album.get('name')))) {
        this.sendAction('remove', album);
      }
    },

    clean: function (album) {
      if (confirm('Are you certain that you want to remove all photos from %@?'.fmt(album.get('name')))) {
         this.sendAction('clean', album);
      }
    }
  }
});
