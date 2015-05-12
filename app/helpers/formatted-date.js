import Ember from 'ember';

export function formattedDate(date) {
   return moment(date[0]).format(date[1]);
}

export default Ember.HTMLBars.makeBoundHelper(formattedDate);
