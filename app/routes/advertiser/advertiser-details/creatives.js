import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var advCtrl = this.controllerFor('advertiser/advertiserDetails');
    return this.store.find('creative', advCtrl.model.id);
  }
});