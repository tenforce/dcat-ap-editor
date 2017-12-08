import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  model(params) {
    return this.store.find('agent', params.id );
  },
  actions: {
    cancel(changeset, model) {
      changeset.rollback();
      this.transitionTo("agents.show", model);
    },
    save(changeset, model) {
      changeset.save()
        .then(() => {
          this.transitionTo("agents.show", model);
        })
        .catch(() => {
          changeset.rollback();
          alert("Could not save agent");
        });
    },
    delete(changeset, model) {
      var self = this;
      model.deleteRecord();
      return model.save().then( function() {
        self.transitionTo( "agents");
      }).catch( function() {
        alert("Deletion of agent failed");
      });
    }
  }
});
