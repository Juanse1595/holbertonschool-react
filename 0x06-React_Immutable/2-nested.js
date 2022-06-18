import Immutable from 'immutable';

export default function accessImmutableObject(object, array) {
  return Immutable.Map(object).getIn(array);
};
