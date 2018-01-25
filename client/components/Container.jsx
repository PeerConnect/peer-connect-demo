import React, { Component } from 'react';
import { render } from 'react-dom';

import Menu from './Menu/Menu.jsx'
import Footer from './Footer/Footer.jsx'

class Container extends Component {
  render() {
    return (
      <div id="container">
        <Menu />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Container;
