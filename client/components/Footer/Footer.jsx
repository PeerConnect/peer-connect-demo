import React from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import logo from '../../assets/images/pc-logo.svg';

const currentYear = moment().format('YYYY');

const Footer = () =>
  (
    <div id="footer" className="bg-gr0 center-content">
      <img style={{ width: '75px' }} src={logo} />
      <small className="text-gr3 margin-top">
        &copy; Copyright {currentYear} <a href="https://github.com/PeerConnect/peer-connect" target="_blank">PeerConnect</a>. Distributed under the <a href="https://github.com/PeerConnect/peer-connect/blob/master/LICENSE" target="_blank">MIT License</a>.
      </small>
    </div>
  );


export default Footer;
