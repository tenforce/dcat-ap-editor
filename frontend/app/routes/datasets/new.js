import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  model() {
    return this.get('store').createRecord('dataset');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "datasets");
      }).catch( function() {
        alert("Creation of dataset failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "datasets");
      }).catch( function() {
        alert("Cancelling creation of dataset failed");
      });
    }
  }
});
