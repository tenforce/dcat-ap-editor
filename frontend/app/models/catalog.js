import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: Ember.computed.collect.apply(this, ['id']),

  title: attr('string'),
  description: attr('string'),
  issued: attr('string'),
  modified: attr('string'),
  language: attr('string'),
  license: attr('string'),
  publisher: belongsTo('agent'),
  datasets: hasMany('dataset', { inverse: 'catalog' })
});
