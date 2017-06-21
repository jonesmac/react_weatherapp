import { NewLocationAction, Location } from '../actions';
import { NEW_LOCATION } from '../constants';

export function locations (state: Location[] = [], action: NewLocationAction) {
  switch (action.type) {
    case NEW_LOCATION:
      const clonedState = state.slice(0);
      return [action.payload, ...clonedState];
    default:
      return state;
  }
}