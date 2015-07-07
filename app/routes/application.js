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
  },
  {
    "OCLC": 67871286,
    "title": "Ubik",
    "publicationDate": "1969",
    "author": "Philip K. Dick",
    "shelves": ["next", "buy"]
  },
  {
    "OCLC": 47677622,
    "title": "Lord of the Flies",
    "publicationDate": "1955",
    "author": "William Golding",
    "shelves": ["next"]
  },
  {
    "OCLC": 19811474,
    "title": "I, Claudius",
    "publicationDate": "1934",
    "author": "Robert Graves",
    "shelves": ["history"]
  },
  {
    "LCCN": 60007847,
    "title": "To Kill a Mockingbird",
    "publicationDate": "1960",
    "author": "Harper Lee",
    "shelves": ["next"]
  },
  {
    "OCLC": 7956273,
    "title": "All the King’s Men",
    "publicationDate": "1946",
    "author": "Robert Penn Warren",
    "shelves": ["next"]
  }
];

export default Ember.Route.extend({
  model: function() {
    return books
      .map(b => Ember.Object.create(b))
      .sortBy('title');
  }
});
