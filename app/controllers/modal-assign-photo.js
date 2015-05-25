import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['application'],

	actions : {
		assignPhotoToCollection : function () {
			 let albumID = this.get('pickedCollection.id'),
	             album = this.get('pickedCollection');

	        if (!albumID) {
	          album = this.get('store').createRecord('album', album);
	        }

	        this.send('undoPick');

	        this.get('model.albums').pushObject(album);
	        this.transitionToRoute('index.collection', album.get('id'));
		},
		pickCollection : function (album) {
			if (typeof album === 'string') {
				album = { name: album };
			}

			this.set('pickedCollection', album);
		},

		undoPick : function () {
			this.set('pickedCollection', null);
		}
	}
});