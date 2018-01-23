import React from 'react';
import { render } from 'react-dom';

import blackpuppy from '../images/blackpuppy.jpg';
import doge from '../images/doge.jpg';

const ImageContainer = () =>
  (
    <div>
      <div id="image-container">
        <img data-src={blackpuppy} />
        <img src={doge} />
      </div>
    </div>
  );


export default ImageContainer;
