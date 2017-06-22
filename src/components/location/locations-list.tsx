import * as React from 'react';
import { Location } from '../../actions/';
import LocationListItem from './locations-list-item';
import './locations-list.css';

interface LocationsProps {
  locations: Location[];
  removeLocation: (index: number) => { type: string, payload: number };
}

class Locations extends React.Component<LocationsProps, void> {
  
  constructor(props: LocationsProps) {
    super(props);
  }

  render() {
    const { locations } = this.props;
    return (
      <div className="locations">
        <h2>My Locations</h2>
        <ul className="locations__list">
          {locations.map((location: Location, index: number) => (
            <LocationListItem
              location={location}
              key={index}
              index={index}
              removeLocation={this.props.removeLocation}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Locations;