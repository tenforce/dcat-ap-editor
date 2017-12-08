// import Ember from 'ember';
import Transform from 'ember-data/transform';

const Boolean = Transform.extend({
  // mu-cl-resources seems to have issues with booleans for now (basically it complains when you try to send a boolean value)
  // this transform was made to get around this, as it will translate a frontend boolean into a string for the DB.
  // therefore, this transform expects the "boolean" value to be specified as a string in the domain.lisp
  // once that issue has been fixed, setting the property to "boolean" in domain.lisp and deleting this transform should be enough
  deserialize(serialized) {
    if (serialized === "true") { return true;
    } else { return false; }
  },
  serialize(deserialized) {
    if (deserialized === true) { return "true";
    } else { return "false"; }
  }
});

export default Boolean;
