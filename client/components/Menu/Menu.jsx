import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router'

// Application components
import Navigation from './Navigation.jsx';

<<<<<<< HEAD
// Assets
import logo from '../../assets/images/pc-logo.svg';
=======
import logo from '../../assets/images/pc-logo.png';
let counter = 0;
>>>>>>> 20019b6b55d47a65f7efb11042b7032ea954d753

const Menu = () =>
  (
    <div id="menu" className="bg-gr0 padding-left-xl padding-right-xl box-shadow-light">
      <Link to="/" >
        <div id="logo-container">
          <img style={{ width: '55px' }} src={logo} />
          <h4 className="raleway text-gr3 margin-left-m">PeerConnect</h4>
        </div>
      </Link>
      <Navigation location={window.location.pathname} />
    </div>
  );

export default Menu;
