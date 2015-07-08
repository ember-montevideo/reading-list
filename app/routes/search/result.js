import Ember from 'ember';

let books = [
  {
    "OCLC": 35022004,
    "title": "Microserfs",
    "publicationDate": "1995",
    "author": "Douglas Coupland",
    "shelves": ["next"]
  },
  {
    "OCLC": 34818133,
    "title": "Do Androids Dream of Electric Sheep?",
    "publicationDate": "1968",
    "author": "Philip K. Dick",
    "shelves": ["next"]
  }
];

export default Ember.Route.extend({
  model: function(params) {
    return books
      .map(b => Ember.Object.create(b))
      .sortBy('title');
  }
});
