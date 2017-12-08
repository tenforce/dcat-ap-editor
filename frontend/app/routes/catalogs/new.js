import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  model() {
    return this.get('store').createRecord('catalog');
  },
  actions: {
    save(model) {
      var self = this;
      return model.save().then( function() {
        self.transitionTo( "catalogs");
      }).catch( function() {
        alert("Creation of catalog failed");
      });
    },
    cancel(model) {
      var self = this;
      model.rollbackAttributes();
      return model.save().then( function() {
        self.transitionTo( "catalogs");
      }).catch( function() {
        alert("Cancelling creation of catalog failed");
      });
    }
  }
});
