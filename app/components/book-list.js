import Ember from 'ember';

let $ = Ember.$;

export default Ember.Component.extend({
  filteredBooks: Ember.computed('books.[]', function() {
    let books = this.get('books');

    return books.filter(
      b => b.get('shelves').indexOf('next') > -1
    );
  })
});
