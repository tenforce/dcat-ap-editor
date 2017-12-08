import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  model(params) {
    return this.store.find('catalog', params.id );
  },
  actions: {
    cancel(changeset, model) {
      changeset.rollback();
      this.transitionTo("catalogs.show", model);
    },
    save(changeset, model) {
      changeset.save()
        .then(() => {
          this.transitionTo("catalogs.show", model);
        })
        .catch(() => {
          changeset.rollback();
          alert("Could not save catalog");
        });
    },
    delete(changeset, model) {
      var self = this;
      model.deleteRecord();
      return model.save().then( function() {
        self.transitionTo( "catalogs");
      }).catch( function() {
        changeset.rollback();
        alert("Deletion of catalog failed");
      });
    }
  }
});
