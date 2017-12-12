import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  model() {
    return this.get('store').createRecord('catalog');
  },
  actions: {
    save(model) {
      return model.save()
              .then(() => {
                this.transitionTo( "catalogs");
              })
              .catch(() => {
                alert("Creation of catalog failed");
              });
    },
    cancel(model) {
      model.rollbackAttributes();
      return model.save()
              .then(() => {
                this.transitionTo( "catalogs");
              })
              .catch(() => {
                alert("Cancelling creation of catalog failed");
              });
    }
  }
});
