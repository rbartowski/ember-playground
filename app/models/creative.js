import DS from 'ember-data';

export default DS.Model.extend({
  refId: DS.attr('string'),
  name: DS.attr('string'),
  status: DS.attr('string'),
  type: DS.attr('string'),
  isArchived: DS.attr('boolean'),
  width: DS.attr('string'),
  height: DS.attr('string'),
  mediaUrl: DS.attr('string'),
  created: DS.attr('date')
});