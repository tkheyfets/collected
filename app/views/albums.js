import Ember from 'ember';

let EmptyView = Ember.View.extend({
  templateName: 'empty-album',
  classNames: ['empty-album-list']
});

let AlbumItemView = Ember.View.extend({
  classNames: ['card-item'],
  templateName: 'card-album'
});

export default Ember.CollectionView.extend({
  classNames: ['u-reset', 'album-list', 'u-scrollable'],
  tagName: 'ul',
  emptyView: EmptyView,
  itemViewClass: AlbumItemView
});
