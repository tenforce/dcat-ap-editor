import Ember from 'ember';

export function getGraph(params) {
  const [ model ] = params;
  const id = model.get('id');
  let prefix;
  switch (model.constructor.modelName) {
    case "address":
      prefix = "adres";
      break;
    case "street":
      prefix = "straatnaam";
      break;
    case "geometry":
      prefix = "adres-geometry";
      break;
    case "locality":
      prefix = "gemeentenaam";
      break;
    case "postinfo":
      prefix = "postinfo";
      break;
  }
  const transformedId = prefix ? `${prefix}-${id}` : id;
  let promise = new Ember.RSVP.Promise((resolve, reject) => {
    Ember.$.ajax({
      type: 'GET',
      url: `/graph/${transformedId}`,
      accepts: 'application/vnd.api+json',
      dataType: 'json',
      success: (data => resolve(data)),
      error: (error => reject(error))
    });
  });
  return promise;
}

export default Ember.Helper.helper(getGraph);
