import * as React from 'react';
import { Location } from '../../actions/';
import './new-location.css';

interface NewLocationProps {
  addLocation: (location: Location) => { type: string; payload: Location; };
}

class NewLocation extends React.Component<NewLocationProps, void> {
  private newLocation: Location;
  private defaultLocation = {city: '', state: '', zip: '', id: 0};

  constructor(props: NewLocationProps) {
    super(props);
    this.resetNewLocation();
  }

  resetNewLocation() {
    this.newLocation = Object.assign({}, this.defaultLocation);
    const seconds = Math.round(new Date().getTime() / 1000);
    this.newLocation.id = seconds;
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.addLocation(this.newLocation);
    (e.target as HTMLFormElement).reset();
    this.resetNewLocation();
  }

  handleChange = (element: string, e: React.ChangeEvent<HTMLInputElement>, ) => {
    this.newLocation[element] = e.target.value;
  }

  render() {
    return (
      <form className="newLocations__form" onSubmit={this.handleSubmit}>
        <h2>New Location</h2>
        <p className="first">
          <label name="city">City: </label>
          <input type="text" name="city" onKeyUp={this.handleChange.bind(this, 'city')} />
        </p>
        <p>
          <label name="state">State: </label>
          <input type="text" name="state" onKeyUp={this.handleChange.bind(this, 'state')} />
        </p>
        <p>
          <label name="zip">Zip Code: </label>
          <input type="text" name="zip" onKeyUp={this.handleChange.bind(this, 'zip')} />
        </p>
        <button type="submit">Add Location</button>
      </form>
    );
  }
}

export default NewLocation;