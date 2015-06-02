import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['photos'],
  expanded: true,

  selectedAlbumDidChange : function () {
      this.send('changeToRoute', this.get('selectedAlbum'));
  }.observes('selectedAlbum'),

  actions : {
    changeToRoute : function (id) {
        if (!!id) {
          this.transitionToRoute('collections.single', id);
        } else {
          this.transitionToRoute('collections.index');
        }
    },

    removeCollection : function (album) {
      return this.get('controllers.photos').send('removeCollection', album);
    },
    cleanCollection : function (album) {
      return this.get('controllers.photos').send('cleanCollection', album);
    },
    createCollection : function () {
    	return this.get('controllers.photos').send('createCollection');
    },
    toggleExpand: function () {
      this.set('expanded', !this.get('expanded'));
    }
  }
});
