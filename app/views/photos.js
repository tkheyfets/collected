import Ember from 'ember';
import Photo from './photo';

let EmptyView = Ember.View.extend({
    templateName: 'empty-album'
});

export default Ember.CollectionView.extend({
  classNames: ['photo-list', 'u-cf'],
  emptyView: EmptyView,
  itemViewClass: Photo
});
