// import Ember from 'ember';
import Transform from 'ember-data/transform';

// String representation of geometry objects
const GeometryTransform = Transform.extend({
  deserialize(serialized) {
    if ((serialized != null) && (serialized.split != null)) {
      serialized = serialized.split('\\n').join('\n');
    }
    return serialized;
  },
  serialize(deserialized) {
    return deserialized;
  }
});

export default GeometryTransform;
