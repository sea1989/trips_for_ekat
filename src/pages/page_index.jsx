import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Modal from '../components/Modal';
import Trips from '../components/Trips';
import Footer from '../components/Footer';

export default class PageIndex extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Search />
        <Modal />
        <Trips />
        <Footer />
      </React.Fragment>
    );
  }
}
