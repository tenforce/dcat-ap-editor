import Ember from 'ember';
import Transform from 'ember-data/transform';

const StringSet = Transform.extend({
  deserialize(serialized) {
    Ember.assert(`expected array got ${Ember.typeOf(serialized)}`, (!serialized) || (Ember.typeOf(serialized) === "array"));
    return serialized || [];
  },
  serialize(deserialized) {
    Ember.assert(`expected array got ${Ember.typeOf(deserialized)}`, (!deserialized) || (Ember.typeOf(deserialized) === "array"));
    return deserialized || [];
  }});
export default StringSet;
