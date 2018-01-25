import React from 'react';
import { render } from 'react-dom';

// Assets
import elephant from '../../assets/images/elephant.jpg'
import rhino from '../../assets/images/rhino.jpg'
import zebra from '../../assets/images/zebra.jpg'
import lion from '../../assets/images/lion.jpg'

const Demo = () =>
  (
    <div id="demo" className="section">
      <div className="demo-main margin-top margin-bottom">
        <img src={elephant} />
      </div>
      <div className="demo-row">
        <img src={rhino} className="margin-bottom" />
        <img src={zebra} className="margin-bottom" />
        <img src={lion} className="margin-bottom" />
      </div>
    </div>
  );

export default Demo;