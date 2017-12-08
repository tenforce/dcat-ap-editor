import Ember from 'ember';
import layout from '../templates/components/navigation-menu';

/*
  This component created a menu for your routes.
  This component assumes, that the routes were only created by this addon.

  The function, that generates the menu list gets all the route names with a lookup,
  then filters the keys with ".index", as that is always part of the resource, this blueprint generates,
  and takes the strings in front of the ".index".

  The list of indeces are always unique and sorted.
*/
export default Ember.Component.extend({
  layout: layout,
  tagName: 'div',
  currentRoute: '',
  routing: Ember.inject.service('-routing'),

  menus: Ember.computed(function() {
    let router = Ember.getOwner(this).lookup('router:main');
    let allRoutesList = router.get('router.recognizer.names');
    let routeKeys = Object.keys(allRoutesList);
    let filteredKeys = routeKeys.filter(function(item) {
      return item.indexOf('.index') >= 0;
    });

    filteredKeys = filteredKeys.map(function(item) {
      return item.split('.index')[0];
    });
    return filteredKeys.uniq().sort();
  }),

  actions: {
    goToPage: function(item) {
      this.set('currentRoute', item);
      this.get("routing").transitionTo(item);
    }
  }
});
