import Ember from 'ember';
import layout from '../templates/components/display-model-hasmany-relationship';

export default Ember.Component.extend({
  layout: layout,
  routing: Ember.inject.service('-routing'),
  tagName: 'div',
  classNameBindings: ['classes'],
  classes: ""
});
