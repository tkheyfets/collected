import Ember from 'ember';
import Photo from './photo';

let EmptyView = Ember.View.extend({
  templateName: 'empty-album',
  classNames: ['empty-collection']
});

export default Ember.CollectionView.extend({
  classNames: ['photo-list', 'u-cf'],
  emptyView: EmptyView,
  content: null,
  itemViewClass: Photo
});
