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
  emptyView: EmptyView,
  itemViewClass: PhotoView
});
