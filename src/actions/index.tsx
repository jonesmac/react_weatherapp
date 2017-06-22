import * as constants from '../constants/';

export interface StoreState {
  locations: Location[];
}

export interface Location {
  id: number;
  city: string;
  state: string;
  zip: string;
}

export interface NewLocation {
    type: constants.NEW_LOCATION;
    payload: Location;
}

export type NewLocationAction = NewLocation;

export function newLocation (location: Location) { 
  return {
    type: constants.NEW_LOCATION, payload: location
  };
}