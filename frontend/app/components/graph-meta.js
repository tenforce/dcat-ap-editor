import Component from '@ember/component';

export default Component.extend({
  tagName: "td",
  classNameBindings: ['classes'],
  classes: "",
  graphNames: Ember.computed('graphs', function() {
    const graphs = this.get('graphs.data.graphs');
    if (graphs)
      return graphs.map((graphName) => `<${graphName}>`).join(', ');
  })
});
