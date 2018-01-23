import React from 'react';
import { render } from 'react-dom';

import logo from '../../images/logo.png'

const Title = () =>
  (
    <div id="title">
      <img id="logo" src={logo} />
      <h1> PeerConnect </h1>
      <h4>very cool app hire us pls</h4>
    </div>
  );


export default Title;
