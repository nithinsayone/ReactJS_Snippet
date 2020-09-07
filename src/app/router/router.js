import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import initializeMap from '../services/mapServices';
import * as Utilities from '../helpers/utilities';
import MapView from './../components/mapView';

import Loader from '../components/loader';

import Home from '../modules/home/container';
import NotFound from '../modules/notFound/container';

/**
 * Application main router component
 * 
 * contains all the available routes and components in the application 
 * The storelist component and idle time calculator component are rendered directly within the main router
 * component and these component will listen to the active events within the application
 */

export default class Router extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      map_object_read: false
    };
    let url = window.location.href;
    if (url.includes('src') || url.includes('dest')) {
      url = Utilities.removeParam('dest', Utilities.removeParam('src', url));
    }
    this.data = Utilities.readURLData(url);
  }

  componentDidMount() {
    if (this.data && this.data.organisation && this.data.site) {
      initializeMap(this.data.organisation, this.data.site)
        .then(() => {
          this.setState({
            map_object_read: true
          });
        })
        .catch(() => {
          window.location.href = '/error';
        });
    }
  }

  render() {
    if (this.state.map_object_read)
      return (
        <BrowserRouter>
          <MapView />
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </BrowserRouter>
      );
    return (
      <BrowserRouter>
        <MapView />
        <Loader />
        <Route exact path='/error' component={NotFound} />
      </BrowserRouter>
    );
  }
}
