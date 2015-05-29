import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['application'],

	actions : {
		assignPhotoToCollection : function () {
			 let albumID = this.get('pickedCollection.id'),
	             album = this.get('pickedCollection');

	        if (!!album) {

		        if (!albumID ) {
		          album = this.get('store').createRecord('album', { name: album.get('name')});
		        }

			    this.send('undoPick');
			    this.get('model.albums').pushObject(album);
			    this.transitionToRoute('collection', album.get('id'));
		    }
		},

		pickCollection : function (album) {
			if (typeof album === 'string' ) {
				let name = album;
				album = Ember.Object.create().set('name', name);
			}

			this.set('pickedCollection', album);
		},

		undoPick : function () {
			this.set('pickedCollection', null);
		}
	}
});