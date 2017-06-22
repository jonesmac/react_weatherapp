import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import './App.css';
import { Location, newLocation, deleteLocation } from './actions/';
import NewLocation from './components/location/new-location';
import Locations from './components/location/locations-list';

interface AppProps {
  locations: Location[];
  dispatch: Dispatch<{ type: string; payload: Location; }>;
}

class App extends React.Component<AppProps, void> {

  render() {
    const { locations, dispatch } = this.props;
    
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Weather Tracker</h2>
        </div>
        <NewLocation
          addLocation={(location: Location) => dispatch(newLocation(location))}
        />
        <Locations
          locations={locations}
          removeLocation={(index: number) => dispatch(deleteLocation(index))}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({locations: state.locations});

const mapDispatchToProps = (dispatch: Dispatch<{ type: string; payload: Location | number; }>) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
