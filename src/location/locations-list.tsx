import * as React from 'react';
import { Location } from '../actions/';
import LocationListItem from './locations-list-item';

interface LocationsProps {
  locations: Location[];
}

class Locations extends React.Component<LocationsProps, void> {
  
  constructor(props: LocationsProps) {
    super(props);
  }

  render() {
    return (
      <ul className="locations_list">
        {this.props.locations.map((location: Location) => (
          <LocationListItem location={location}/>
        ))}
      </ul>
    );
  }
}

export default Locations;