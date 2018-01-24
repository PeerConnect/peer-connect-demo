import React, { Component } from 'react';
import { render } from 'react-dom';

// Components
import Instruction from './Instruction.jsx';

// Assets
import graphic from '../../images/pc-graphic.png'

const instructions = [
  {
    title: 'Add this script to your front end.',
    snippet1: '<script src="peer-connect.min.js"><script/>'
  },
  {
    title: 'Change source tags of which assets you want',
    snippet1: '<img data-src="my-awesome-cat-pic.jpg"/>'
  },
  {
    title: 'Require PeerConnect to your back end.',
    direction: 'npm install peer-connect in your project directory',
    snippet1: 'const PeerConnect = require(\'peer-connect\')'
  },
  {
    title: 'Invoke PeerConnect!',
    direction: 'Define your config object and call the peerConnect function.',
    snippet1: 'const config = { big ol\' placeholder config object}',
    snippet2: 'const server = app.listen(3000)',
    snippet3: 'peerConnect(config, server)'
  }
];

class GetStarted extends Component {
  renderInstructions() {
    return instructions.map((instruction, i) => {
      return (
        <Instruction
          key={`instruction-${i}`}
          title={instruction.title}
          direction={instruction.direction}
          snippet1={instruction.snippet1 ? instruction.snippet1 : null}
          snippet2={instruction.snippet2 ? instruction.snippet2 : null}
          snippet3={instruction.snippet3 ? instruction.snippet3 : null}
        />
      )
    });
  }

  render() {
    return (
      <div id="get-started" className="section padding">
        <a name="get-started"></a>
        <div id="instructions">
          <div className="h2 fw-600 margin-top margin-bottom-m raleway">Get Started</div>
          {this.renderInstructions()}
        </div>
        <div className="center-content instruction-graphic-container">
          <img id="instruction-graphic" className="margin-left-xl" src={graphic} />
        </div>
      </div>
    );
  }
}


export default GetStarted;
