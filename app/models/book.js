import DS from 'ember-data';

let attr = DS.attr;

export default DS.Model.extend({
  title: attr('string'),
  publicationDate: attr('date'),
  author: attr('string'),
  shelves: attr()
});
