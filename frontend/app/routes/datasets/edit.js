import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  model(params) {
    return this.store.find('dataset', params.id );
  },
  actions: {
    cancel(changeset, model) {
      changeset.rollback();
      this.transitionTo("datasets.show", model);
    },
    save(changeset, model) {
      changeset.save()
        .then(() => {
          this.transitionTo("datasets.show", model);
        })
        .catch( function() {
          changeset.rollback();
          alert("Could not save dataset");
        });
    },
    delete(changeset, model) {
      model.deleteRecord();
      return model.save()
              .then(() => {
                this.transitionTo( "datasets");
              })
              .catch( function() {
                changeset.rollback();
                alert("Deletion of dataset failed");
              });
    }
  }
});
