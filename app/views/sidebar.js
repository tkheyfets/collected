import Ember from 'ember';

export default Ember.View.extend({
	didInsertElement : function () {
		Ember.$('[data-title]').tooltip({
			placement: 'right',
			container: '.container-tooltips'
		});
	}
});
