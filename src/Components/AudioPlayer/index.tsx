import { useState } from 'react';
import { Space } from 'antd';
import PlayIcon from 'assets/audio-player-icons/play.svg';
import PauseIcon from 'assets/audio-player-icons/pause.png';
import AudioIcon from 'assets/audio-player-icons/audio.png';

import './audio-player-style.scss';

// function PlayBar() {
//   return (
//     <p>Bar</p>
//   );
// }

// function teste() {
//   console.log('teste');
// }

export default function AudioPlayer() {
  const [playPause, setPlayPause] = useState(false);
  const playAudio = () => {
    setPlayPause(!playPause);
  };
  return (
    <Space>
      <button type="button" onClick={() => playAudio()}>
        <img src={playPause ? PauseIcon : PlayIcon} alt="play" />
      </button>
      <input className="progress-bar" type="range" min="0" max="100" />
      {/* <PlayBar /> */}
      <img src={AudioIcon} alt="play" />
    </Space>
  );
}
