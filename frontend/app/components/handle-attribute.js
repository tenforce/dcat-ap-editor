import Ember from 'ember';
import layout from '../templates/components/handle-attribute';

/*
  This component displays and edits attributes (except string-set, language-string-set).
  The tagname is configurable, the default is a div, because otherwise we cannot use classNameBindings.
  The classes are configurable, the default is "".
*/
export default Ember.Component.extend({
  layout: layout,
  tagName: "div",
  classNameBindings: ['classes'],
  classes: ""
});
