import Ember from 'ember';

export default Ember.Route.extend({
  showError: false,

  actions: {
    toggleShowError(error) {
      Ember.set(error, 'showError', !error.showError);
    }
  }
});
