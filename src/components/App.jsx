import React from 'react';

import PageIndex from '../pages/page_index';
import PageLogin from '../pages/page1_login';
import Page1 from '../pages/page1';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './reset.css';
import './style.css';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route path='/about'>
              <Page1 />
            </Route>

            <Route path='/login'>
              <PageLogin />
            </Route>

            <Route path='/'>
              <PageIndex />
            </Route>
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}
