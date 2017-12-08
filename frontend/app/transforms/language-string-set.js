import Ember from 'ember';
import Transform from 'ember-data/transform';

const LangString = function(content,lang){
  this.content = content;
  this.language = lang;
  this.toString = function(){return this['content'] + " (" + this['language'] + ")";}
};

const LangStringSet = Transform.extend({
  deserialize(serialized) {
    Ember.assert(`expected array got ${Ember.typeOf(serialized)}`, (!serialized) || (Ember.typeOf(serialized) === "array"));

    // the \n we're being send back by mu-cl-resources is not interpreted as a line feed so we have to force it
    serialized = serialized.map(function(item) {
      return new LangString(item['content'].split('\\n').join('\n'), item['language']);
    });

    return serialized;
  },
  serialize(deserialized) {
    Ember.assert(`expected array got ${Ember.typeOf(deserialized)}`, (!deserialized) || (Ember.typeOf(deserialized) === "array"));
    return deserialized;
  }
});

export {LangStringSet as default, LangString};
