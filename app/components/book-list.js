import Ember from 'ember';

export default Ember.Component.extend({
  filteredBooks: Ember.computed('books.[]', function() {
    let books = this.get('books'),
        shelve = this.get('shelve');

    return books.filter(
      b => b.get('shelves').indexOf(shelve) > -1
    );
  })
});
