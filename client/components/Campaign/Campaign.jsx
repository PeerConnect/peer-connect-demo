import React from 'react';
import { render } from 'react-dom';

import logo from '../../images/pc-logo.png';

const Campaign = () =>
  (
    <div id="campaign" className="center-content gradient">
      <img id="logo" src={logo} />
      <h1 className="text-gr3 fw-600 raleway margin-top margin-bottom-m">PeerConnect</h1>
      <h4 className="text-gr3 margin-top-0 margin-bottom">A P2P CDN Implementation</h4>
      <a href="https://github.com/PeerConnect/peer-connect" target="_blank">
        <button>
          CHECK US OUT ON GITHUB
        </button>
      </a>
    </div>
  );


export default Campaign;
