import Ember from 'ember';
import layout from '../templates/components/sortable-table-header';

/**
  This component represents a sortable table header. Onclick it will first sort ascending,
  otherwise descending, after that turns off sorting for that attribute.

  The tagname is configurable, the default is a th, because otherwise we cannot use classNameBindings.
  The classes are configurable, the default is "properties__label".
  Other classes that will be added:
  - the order of sorting (asc/desc),
  - 'sorted', if it's sorted
  - 'sortable'

  This component is based on the ember-data-table: https://github.com/mu-semtech/ember-data-table/blob/master/addon/components/th-sortable.js
*/
export default Ember.Component.extend({
  layout: layout,
  tagName: 'th',
  classNameBindings: ['classes', 'sortableClass', 'order', 'isSorted:sorted'],
  classes: "properties__label",
  sortableClass: "sortable",
  currentSort: "",

  dasherizerized: Ember.computed('attribute', function() {
    return Ember.String.dasherize(this.get('attribute'));
  }),
  inverseDasherizerized: Ember.computed('dasherizerized', function() {
    return "-" + this.get('dasherizerized');
  }),

  isSorted: Ember.computed('order', function() {
    return (this.get('order') !== null) && (this.get('order').length > 0);
  }),
  order: Ember.computed('currentSort', function() {
    var currentSort = this.get('currentSort');
    if (currentSort === this.get('dasherizerized')) {
      return "asc";
    }
    if (currentSort === this.get('inverseDasherizerized')) {
      return "desc";
    }
    return "";
  }),
  actions: {
    /**
       Sets the current sorting parameter.
       Note: the current sorting parameter may contain another field than the given field.
       In case the given field is currently sorted ascending, change to descending.
       In case the given field is currently sorted descending, clean the sorting.
       Else, set the sorting to ascending on the given field.
     */
    inverseSorting() {
      if (this.get('order') === 'asc') {
        this.set('currentSort', this.get('inverseDasherizerized'));
      } else if (this.get('order') === 'desc') {
        this.set('currentSort', '');
      } else { // if currentSorting is not set to this field
        this.set('currentSort', this.get('dasherizerized'));
      }
    }
  }
});
