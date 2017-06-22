import * as React from 'react';
import { Location } from '../../actions/';

interface LocationListItemProps {
  location: Location;
}

class LocationListItem extends React.Component<LocationListItemProps, void> {
  constructor(props: LocationListItemProps) {
    super(props);
  }

  render() {
    return (
      <li>
        <p>City: {this.props.location.city}</p>
        <p>State: {this.props.location.state}</p>
        <p>Zip: {this.props.location.zip}</p>
      </li>
    );
  }
}

export default LocationListItem;