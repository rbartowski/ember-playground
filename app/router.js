import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('advertiser', function() {
    this.route('advertiserList');
    this.route('advertiserDetails', { path: '/:advertiser_id' }, function() {
      this.route('general');
      this.route('creatives');
      this.route('settings');
    });
  });


  this.route('doge', { path: '/doge' });
  this.route('magicandfun', { path: '/magic_and_fun' });
  this.route('advertiser');
});
