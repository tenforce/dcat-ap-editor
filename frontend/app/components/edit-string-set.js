import Ember from 'ember';

/*
  This component edit string-sets.
  The tagname is configurable, the default is a div, because otherwise we cannot use classNameBindings.
  The classes are configurable, the default is "".
*/
export default Ember.Component.extend({
  tagName: "div",
  classNameBindings: ['classes'],
  classes: "",

  init() {
    this._super(...arguments);
    const strings = this.get("data");
    var newStrings = Ember.isNone(strings) ? [] : Ember.copy(strings, true);
    this.set("view", newStrings);
  },

  actions: {
    changeStringSetElement(index, value) {
      const strings = this.get("data");
      var newStrings = Ember.copy(strings, true);
      newStrings[index] = value;
      this.set("data", newStrings);
    },
    
    deleteLabel(index) {
      const strings = this.get("data");
      var newStrings = Ember.copy(strings, true);
      newStrings.removeAt(index);
      this.set("data", newStrings);
      this.get("view").removeAt(index);
    },

    /*
      This action creates a new element in the string-set.
      If it doesn't exists yet, it creates an empty array and puts a new element in it.
    */
    createLabel() {
      const strings = this.get("data");
      var newStrings = Ember.isNone(strings) ? [] : Ember.copy(strings, true);

      var newLabel = "";

      newStrings.push(newLabel);
      this.set("data", newStrings);
      this.get("view").pushObject(newLabel);
    }
  }
});
