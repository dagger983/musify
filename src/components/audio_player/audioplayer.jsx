
import React from 'react';
import ReactPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import "./audioplayer.css"

const AudioPlayer = ({ src }) => {
  return <ReactPlayer src={src} autoPlay={false} controls className='audioplayerds' />;
};

export default AudioPlayer;
