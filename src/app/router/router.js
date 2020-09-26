import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../modules/home/container';

/**
 * Application main router component
 * 
 * contains all the available routes and components in the application 
 * The storelist component and idle time calculator component are rendered directly within the main router
 * component and these component will listen to the active events within the application
 */

export default class Router extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}
