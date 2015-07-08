import Ember from 'ember';

let $ = Ember.$;

function docToBook(doc) {
  return Ember.Object.create({
    key: doc.key,
    title: doc.title,
    author: (doc.author_name && doc.author_name[0]) || 'Unknown Author',
    publicationDate: doc.first_publish_year
  });
}

export default Ember.Route.extend({
  model: function(params) {
    let term = encodeURIComponent(params.term);

    return $.getJSON(`https://openlibrary.org/search.json?q=${term}&limit=30&callback=`)
      .then(r => r.docs.map(docToBook).sortBy('title'));
  }
});
