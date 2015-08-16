import DS from 'ember-data';

let attr = DS.attr;

export default DS.Model.extend({
  title: attr('string'),
  author: attr('string'),
  publicationDate: attr('date')
});
