import React from 'react';
import { render } from 'react-dom';

// import logo from '../../images/logo.png'

const GetStarted = () =>
  (
    <div id="get-started">
      <div id="instructions">
        <h2>Get Started</h2>
        <div className="instruction-bullet">
          <div className="instruction-bullet-header">
            <img className="instruction-icon" src="https://image.flaticon.com/icons/png/128/291/291201.png"/>
            <h6>Add this script to your front end.</h6>
          </div>
          <div className="instruction-bullet-content">
            <li>
              code snippet here
            </li>
            <li>"const PeerConnect = require 'peer-connect'"</li>
          </div>
        </div>
        <div className="instruction-bullet">
          <div className="instruction-bullet-header">
            <img className="instruction-icon" src="https://image.flaticon.com/icons/png/128/291/291201.png"/>
            <h6>Change source tags of which assets you want </h6>
          </div>
          <div className="instruction-bullet-content">
            <li>
              code snippet here
            </li>
            <li>"const PeerConnect = require 'peer-connect'"</li>
          </div>
        </div>
        <div className="instruction-bullet">
          <div className="instruction-bullet-header">
            <img className="instruction-icon" src="https://image.flaticon.com/icons/png/128/291/291201.png" />
            <h6>Install PeerConnect</h6>
          </div>
          <div className="instruction-bullet-content">
            <li>"npm install peer-connect" in your project directory</li>
            <li>"const PeerConnect = require 'peer-connect'"</li>
          </div>
        </div>
        <div className="instruction-bullet">
          <div className="instruction-bullet-header">
            <img className="instruction-icon" src="https://image.flaticon.com/icons/png/128/291/291201.png" />
            <h6>Invoke PeerConnect!</h6>
          </div>
          <div className="instruction-bullet-content">
            <li>define your config object</li>
            <li>call the peerConnect function</li>
            <li>peerConnect(config, server)</li>
          </div>
        </div>
      </div>
      <img id="instruction-gif" src="https://media.giphy.com/media/B2vBunhgt9Pc4/giphy.gif" />
    </div>
  );


export default GetStarted;
