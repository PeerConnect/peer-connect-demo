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
      <div className="demo-row margin-top">
        <div className="demo-stats fw-600" id="location-from"><strong></strong><span className="margin-left-s"></span></div>
        <div className="demo-stats fw-600" id="location-to"><strong></strong><span className="margin-left-s"></span></div>
        {/* <div className="demo-stats"><strong>Total Time: </strong><span className="margin-left-s">00ms</span></div> */}
      </div>
      <div className="demo-main margin-top margin-bottom">
        <img data-src={elephant} />
      </div>
      <div className="demo-row">
        <img data-src={rhino} className="margin-bottom" />
        <img data-src={zebra} className="margin-bottom" />
        <img data-src={lion} className="margin-bottom" />
      </div>
      <script>console.log('hello') </script>
    </div>
  );

export default Demo;
