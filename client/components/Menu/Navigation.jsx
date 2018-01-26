import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router'

class Navigation extends Component {
  render() {
    return (
      <nav id="navigation" className="margin-right-xl">
        <ul className="fw-600">
          <li>
            <a class="github-button" href="https://github.com/PeerConnect/peer-connect" data-show-count="true">Star</a>
          </li>
          {
            this.props.location === '/' &&
            <span>
              <li className="hide-nav-link"><a href="#features">Features</a></li>
              <li><a href="#get-started">Get Started</a></li>
              <li className="hide-nav-link"><a href="#team">Team</a></li>
            </span>
          }
          <li><Link to="/demo" activeClassName="active">Demo</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
