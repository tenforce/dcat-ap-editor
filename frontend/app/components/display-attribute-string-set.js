import Ember from 'ember';
import layout from '../templates/components/display-attribute-string-set';

/*
  This component displays string-sets.
  The tagname is configurable, the default is a div, because otherwise we cannot use classNameBindings.
  The classes are configurable, the default is "".
  The innerTagName is used for the tagName for the inner elements (the strings itselfs).
*/
export default Ember.Component.extend({
  layout: layout,
  tagName: "div",
  innerTagName: "div",
  classNameBindings: ['classes'],
  classes: ""
});
