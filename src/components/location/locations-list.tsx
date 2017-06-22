import * as React from 'react';
import { Location } from '../../actions/';
import LocationListItem from './locations-list-item';
import './locations-list.css';

interface LocationsProps {
  locations: Location[];
}

class Locations extends React.Component<LocationsProps, void> {
  
  constructor(props: LocationsProps) {
    super(props);
  }

  render() {
    return (
      <div className="locations">
        <h2>My Locations</h2>
        <ul className="locations__list">
          {this.props.locations.map((location: Location) => (
            <LocationListItem location={location}/>
          ))}
        </ul>
      </div>
    );
  }
}

export default Locations;