import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.fetchById('book', params.book_id);
  },

  actions: {
    delete(model) {
      model.destroyRecord().then(() => this.transitionTo('index'));
    }
  }
});
