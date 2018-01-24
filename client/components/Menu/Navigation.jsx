import React from 'react';
import { render } from 'react-dom';

const Navigation = () =>
  (
    <nav id="navigation" className="margin-right-xl">
      <ul className="fw-600">
        <li><a href="#features">Features</a></li>
        <li><a href="#get-started">Get Started</a></li>
        <li><a href="#team">Team</a></li>
        <li><a>Demo</a></li>
      </ul>
    </nav>
  );


export default Navigation;
