import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('catalogs', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('datasets', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('distributions', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('agents', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });

  this.route('route-not-found', {
    path: '/*wildcard'
  });
});

export default Router;
