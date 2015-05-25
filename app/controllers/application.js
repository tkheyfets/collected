import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['photos'],

  actions : {
    removeCollection : function (album) {
      return this.get('controllers.photos').send('removeCollection', album);
    },
    cleanCollection : function (album) {
      return this.get('controllers.photos').send('cleanCollection', album);
    },
    createCollection : function () {
    	return this.get('controllers.photos').send('createCollection');
    }
  }
});
