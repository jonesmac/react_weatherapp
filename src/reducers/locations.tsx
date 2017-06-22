import { LocationAction, Location } from '../actions';
import { NEW_LOCATION, DELETE_LOCATION } from '../constants';

export function locations (state: Location[] = [], action: LocationAction) {
  switch (action.type) {
    case NEW_LOCATION:
      let clonedState = state.slice(0);
      return [action.payload, ...clonedState];
    case DELETE_LOCATION:
      clonedState = state.slice(0);
      clonedState.splice(action.payload, 1);
      return clonedState;
    default:
      return state;
  }
}