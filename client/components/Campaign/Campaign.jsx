import React, { Component } from 'react';
import { render } from 'react-dom';

// Assets
import logo from '../../assets/images/pc-logo.png';

class Campaign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seeds: 0,
      progress: 0
    };
    this.renderDemoContent = this.renderDemoContent.bind(this);
  }

  componentDidMount() {
    const client = new WebTorrent();
    const torrentId = 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent';
    function onTorrent(torrent) {
      let that = this;
      const file = torrent.files.find(function (file) {
        return file.name.endsWith('.mp4');
      });

      file.appendTo('#video-tag');

      function updateSeeds() {
        ;
        that.setState({ seeds: torrent.wires.length, progress: torrent.progress });
      }
      setInterval(updateSeeds, 1000);
    }
    client.add(torrentId, onTorrent.bind(this));
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

  renderDemoContent() {
    return (
      <div id="campaign" className="center-content gradient">
        <div className="demo-content-container">
          <div className="peer-info margin-left margin-right margin-bottom">
            <div className="h3 fw-600 raleway">Sintel, the Durian Open Movie Project</div>
            <div className="h4 margin-bottom">A Creative Commons Short Film</div>
            <div>Seeds: {this.state.seeds}</div>
            <div>Progress: {(this.state.progress * 100).toFixed(1)}%</div>
          </div>
          <div className="video-container margin-left margin-right">
            <div id="video-tag"></div>
          </div>
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
