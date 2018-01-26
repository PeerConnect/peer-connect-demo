import React, { Component } from 'react';
import { render } from 'react-dom';

// Components
import Instruction from './Instruction.jsx';

// Assets
import graphic from '../../assets/images/pc-graphic.svg'

const instructions = [
  {
    title: 'Add these scripts to your front end.',
    snippet1: '<script src="https://unpkg.com/peer-connect-client@0.1.3/peer-connect-client.min.js"></script>',
    snippet2: '<script src="/socket.io/socket.io.js"></script>'
  },
  {
    title: 'Change source tags of image and video assets you want.',
    snippet1: '<img data-src="my-awesome-cat-pic.jpg"/>'
  },
  {
    title: 'Require PeerConnect to your back end.',
    direction: 'npm install peer-connect-server in your project directory',
    snippet1: 'const PeerConnect = require("peer-connect-server");'
  },
  {
    title: 'Invoke PeerConnect!',
    direction: 'Define your config object and call the peerConnect function.',
    snippet1: `const config = {
  threshold: Integer         // 3
  peerImages: Boolean        // true
  peerVideos: Boolean        // true
  excludeFormats: [Strings]  // ['gif']
  foldLoading: Boolean       // false
  geoLocate: Boolean         // true
  videoRoute: String         // './assets/videos'
  torrentRoute: String       // './assets'
  domainName: String         // 'https://peerconnect.io'
};`,
    snippet2: 'const server = app.listen(3000);',
    snippet3: `//to allow cross origin resource sharing
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});`,
    snippet4: 'peerConnect(server, app, config);'
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
          language={instruction.language}
          snippet1={instruction.snippet1 ? instruction.snippet1 : null}
          snippet2={instruction.snippet2 ? instruction.snippet2 : null}
          snippet3={instruction.snippet3 ? instruction.snippet3 : null}
          snippet4={instruction.snippet4 ? instruction.snippet4 : null}
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
          <img className="margin-left-xl" style={{ width: '300px' }} src={graphic} />
        </div>
      </div>
    );
  }
}


export default GetStarted;
