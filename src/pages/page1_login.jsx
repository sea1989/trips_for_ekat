import React from 'react';
import Header from '../components/Header';
import Login from '../components/login';

export default class PageLogin extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Login />
      </React.Fragment>
    );
  }
}
