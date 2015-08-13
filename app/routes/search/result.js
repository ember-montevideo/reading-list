import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findQuery('search-result', params.term);
  },

  actions: {
    createBook(searchResult) {
      let book = this.store.createRecord('book', {
        id: searchResult.get('id'),
        title: searchResult.get('title'),
        author: searchResult.get('author'),
        publicationDate: searchResult.get('publicationDate'),
        shelves: ['next']
      });

      book.save().then(() => this.transitionTo('next'));
    }
  }
});
