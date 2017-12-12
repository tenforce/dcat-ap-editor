import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  model() {
    return this.get('store').createRecord('agent');
  },
  actions: {
    save(model) {
      return model.save()
              .then(() => {
                this.transitionTo( "agents");
              })
              .catch( function() {
                alert("Creation of agent failed");
              });
    },
    cancel(model) {
      model.rollbackAttributes();
      return model.save()
              .then(() => {
                this.transitionTo( "agents");
              })
              .catch( function() {
                alert("Cancelling creation of agent failed");
              });
    }
  }
});
