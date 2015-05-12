import DS from 'ember-data';

export default DS.Model.extend({
  refId: DS.attr('string'),
  name: DS.attr('string'),
  status: DS.attr('string'),
  ownerName: DS.attr('string'),
  email: DS.attr('string'),
  domain: DS.attr('string'),
  created: DS.attr('date'),
});