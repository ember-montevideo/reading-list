import Ember from 'ember';
import DS from 'ember-data';

let $ = Ember.$;

export default DS.Adapter.extend({
  findQuery(store, type, query) {
    let term = encodeURIComponent(query);

    return $.getJSON(`https://openlibrary.org/search.json?q=${term}&limit=30&callback=`);
  }
});
