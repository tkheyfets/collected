import Ember from 'ember';

let EmptyView = Ember.View.extend({
  templateName: 'empty-album'
});

let AlbumItemView = Ember.View.extend({
  classNames: ['card-item'],
  templateName: 'card-album'
});

export default Ember.CollectionView.extend({
  classNames: ['u-reset'],
  tagName: 'ul',
  emptyView: EmptyView,
  itemViewClass: AlbumItemView
});