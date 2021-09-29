import React from 'react';
import Header from '../components/Header';
import ItemFull from '../components/Item-full';

export default class Page1 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <ItemFull />
      </React.Fragment>
    );
  }
}
