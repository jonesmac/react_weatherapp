import * as React from 'react';
import { Location } from '../../actions/';
import './locations-list-item.css';

interface LocationListItemProps {
  location: Location;
  index: number;
  removeLocation: (index: number) => {type: string, payload: number};
}

class LocationListItem extends React.Component<LocationListItemProps, void> {
  constructor(props: LocationListItemProps) {
    super(props);
  }

  render() {
    const { removeLocation, index } = this.props;
    return (
      <li className="location__list-item">
        <p>City: {this.props.location.city}</p>
        <p>State: {this.props.location.state}</p>
        <p>Zip: {this.props.location.zip}</p>
        <div className="delete" onClick={removeLocation.bind(this, index)}>
          <span>-</span>
        </div>
      </li>
    );
  }
}

export default LocationListItem;