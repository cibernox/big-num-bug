import Ember from 'ember';

export function numberWtf([number], { label }) {
  console.log(`number ${label} is`, number);
  return number;
}

export default Ember.Helper.helper(numberWtf);
