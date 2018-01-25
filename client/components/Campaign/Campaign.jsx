import React, { Component } from 'react';
import { render } from 'react-dom';

import logo from '../../assets/images/pc-logo.png';

class Campaign extends Component {
  renderHomeContent() {
    return (
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
  }

  renderDemoContent() {
    return (
      <div id="campaign" className="center-content gradient">
        {/* <video src="../assets/torrents/sintel.torrent" controls /> */}
        <div style={{ width: '500px', height: '250px', backgroundColor: '#EFEFEF', justifyContent: 'center' }}>
          <h2>VIDEO GOES HERE</h2>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        {
          this.props.location === '/' ? this.renderHomeContent() : this.renderDemoContent()
        }
      </div>
    );
  }
}

export default Campaign;
