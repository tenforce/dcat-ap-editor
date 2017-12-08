import Ember from 'ember';
import layout from '../templates/components/handle-attribute';
import moment from 'moment';


/*
  This component displays and edits dates.
  The tagname is configurable, the default is a div, because otherwise we cannot use classNameBindings.
  The classes are configurable, the default is "".

  timePicker - show timepicker or not, the default is false
  timeSteps - interval of minute stepts in the timePicker, default is 5
*/
export default Ember.Component.extend({
  layout: layout,
  tagName: "div",
  classNameBindings: ['classes'],
  classes: "",
  timePicker: false,
  timeSteps: 5,

  didReceiveAttrs() {
    this._super(...arguments);
    let element = 'model.' + this.get('attribute');

    if (this.get(element) == null) {
      this.set(element, moment());
    }
  }
});
