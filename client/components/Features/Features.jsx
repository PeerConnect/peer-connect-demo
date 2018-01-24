import React from 'react';
import { render } from 'react-dom';

const Features = () =>
  (
    <div id="features" className="section padding">
      <a name="features"></a>
      <div className="h2 fw-600 margin-top margin-bottom-m raleway">Features</div>
      <div>
        PeerConnect is a proof of concept that aims to serve static assets (videos/images)
        over a peer to peer delivery network powered by WebRTC (images), WebTorrent (videos),
        and WebSockets (signaling).
      </div>
      <div className="h5 fw-600 margin-top-lg margin-bottom-m raleway">Images</div>
      <div>
        PeerConnect uses WebRTC for image P2P transfers. By using websockets, we are able to
        coordinate data-channel connections between two different peers. If no available peers
        are present, images are loaded from the server. Once a peer finishes downloading, they
        become an initiator for future P2P data transfers.
      </div>
      <div className="h5 fw-600 margin-top-lg margin-bottom-m raleway">Video</div>
      <div>
        PeerConnect uses WebTorrent and torrenting protocols for video P2P transfers. By utilizing
        the server as a webseed for videos, as more and more individuals visit the site, video streams
        will get progressively stronger and rely less on the initial webseed hosted on the server.
      </div>
    </div>
  );


export default Features;
