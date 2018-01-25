import React, { Component } from 'react';
import { render } from 'react-dom';

// Application components
import Menu from './Menu/Menu.jsx'
import Footer from './Footer/Footer.jsx'
import Campaign from './Campaign/Campaign.jsx'

class Container extends Component {
  render() {
    return (
      <div id="container">
        <Menu />
        <Campaign location={window.location.pathname} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Container;
