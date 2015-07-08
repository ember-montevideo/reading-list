import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    search: function(term) {
      this.transitionTo('search.result', term);
    }
  }
});
