import Ember from 'ember';

let EmptyView = Ember.View.extend({
  templateName: 'empty-grid',
  classNames: ['empty-collection']
});

let PhotoView =  Ember.View.extend({
  classNames: ['photo-item', 'u-left'],
  templateName: 'photo'
});

export default Ember.CollectionView.extend({
  classNames: ['photo-list', 'u-cf'],
  attributeBindings: ['style'],
  emptyView: EmptyView,
  itemViewClass: PhotoView,

  style : function () {
  	return [
  			'width: -webkit-calc(100vw * %@1)',
  			'width: -moz-calc(100vw * %@1)',
  			'width: calc(100vw * %@1);'
  		   ].join(';').fmt(this.get('content.length')); 
  }.property('content.length')
});
