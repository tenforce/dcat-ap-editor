import Ember from 'ember';
import layout from '../templates/components/edit-belongs-to';

export default Ember.Component.extend({
  layout: layout,
  tagName: "div",

  store: Ember.inject.service(),

  options: Ember.computed(function(){
    return this.get('store').findAll(this.get('relType'))
  }),

  actions: {
    search(type, term) {
      return new Ember.RSVP.Promise((resolve, reject) => {
        Ember.run.debounce(this, this._performSearch, type, term, resolve, reject, 600);
      });
    }
  },

  _performSearch(type, term, resolve, reject) {
    this.get('store').query(type, {'filter': term}).then(resp => resolve(resp), reject)
  }
});
