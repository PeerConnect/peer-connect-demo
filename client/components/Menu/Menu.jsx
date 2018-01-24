import React from 'react';
import { render } from 'react-dom';

import Navigation from './Navigation.jsx';

import logo from '../../images/pc-logo.png';

const Menu = () =>
  (
    <div id="menu" className="bg-gr0 padding-left-xl padding-right-xl box-shadow-light">
      <div id="logo-container">
        <img id="logo" src={logo} />
        <h4 className="raleway text-gr3">PeerConnect</h4>
      </div>
      <Navigation />
    </div>
  );


export default Menu;
