import React from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import logo from '../../images/pc-logo.png';

const currentYear = moment().format('YYYY');

const Footer = () =>
  (
    <div id="footer" className="bg-gr0 center-content margin-top-lg">
      <img src={logo} />
      <small className="text-gr3 margin-top">&copy; Copyright {currentYear} PeerConnect. All rights reserved.</small>
    </div>
  );


export default Footer;
