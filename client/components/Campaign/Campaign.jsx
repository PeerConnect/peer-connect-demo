import React, { Component } from 'react';
import { render } from 'react-dom';

// Assets
import logo from '../../assets/images/pc-logo.png';

// Application components
import DemoCampaign from '../Demo/DemoCampaign.jsx';

class Campaign extends Component {
  constructor(props) {
    super(props);
  }

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

  render() {
    return (
      <div>
        {
          this.props.location === '/' ? this.renderHomeContent() : <DemoCampaign />
        }
      </div>
    );
  }
}

export default Campaign;
