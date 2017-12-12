import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  model() {
    return this.get('store').createRecord('dataset');
  },
  actions: {
    save(model) {
      return model.save()
              .then(() => {
                this.transitionTo( "datasets");
              })
              .catch( function() {
                alert("Creation of dataset failed");
              });
    },
    cancel(model) {
      model.rollbackAttributes();
      return model.save()
              .then(() => {
                this.transitionTo( "datasets");
              })
              .catch( function() {
                alert("Cancelling creation of dataset failed");
              });
    }
  }
});
