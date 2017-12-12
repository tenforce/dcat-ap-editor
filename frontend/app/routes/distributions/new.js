import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  model() {
    return this.get('store').createRecord('distribution');
  },
  actions: {
    save(model) {
      return model.save()
              .then(() => {
                this.transitionTo( "distributions");
              })
              .catch(() => {
                alert("Creation of distribution failed");
              });
    },
    cancel(model) {
      model.rollbackAttributes();
      return model.save()
              .then(() => {
                this.transitionTo( "distributions");
              })
              .catch( function() {
                alert("Cancelling creation of distribution failed");
              });
    }
  }
});
