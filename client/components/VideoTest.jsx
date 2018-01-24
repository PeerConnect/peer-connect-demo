import React from 'react';
import { render } from 'react-dom';

const VideoTest = () =>
  (
    <div id="video-test">
      <video data-src="./client/videos/yosemite-hd.mp4" controls />
    </div>
  );


export default VideoTest;
