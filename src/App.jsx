import React from 'react';

import MiniPlayer from './components/mini-player';
import { CONTROLS, POSITION } from './components/mini-player';

import './App.css';

// const STREAM_PLAYBACK_URL =
//   'https://3d26876b73d7.us-west-2.playback.live-video.net/api/video/v1/us-west-2.913157848533.channel.xJ2tVekwmMGd.m3u8';
const STREAM_PLAYBACK_URL =
  'https://b2131d71d402.us-east-1.playback.live-video.net/api/video/v1/us-east-1.120327967328.channel.az79dMyKUT7o.m3u8';

const App = () => {
  return (
    <div className="App">
      <MiniPlayer
        streamUrl={STREAM_PLAYBACK_URL}
        controls={[CONTROLS.resize, CONTROLS.close, CONTROLS.mute]}
        position={POSITION.bottomRight}
        transition
      />

      {[...Array(20)].map((_, i) => (
        <div className="App-contentPlaceholder" key={i} />
      ))}
    </div>
  );
};

export default App;
