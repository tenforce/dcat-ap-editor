import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  model() {
    return this.get('store').createRecord('distribution');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "distributions");
      }).catch( function() {
        alert("Creation of distribution failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "distributions");
      }).catch( function() {
        alert("Cancelling creation of distribution failed");
      });
    }
  }
});
