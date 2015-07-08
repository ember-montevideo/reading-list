import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('next');
  this.route('buy');
  this.route('history');
});

export default Router;
