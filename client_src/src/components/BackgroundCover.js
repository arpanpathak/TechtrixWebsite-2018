import React from 'react';
import $ from 'jquery';
import '../assets/css/BackgroundCover.css';
import VideoCover from '../assets/videos/techtrix_cover.mp4';
import VideoCoverLoop from '../assets/videos/techtrix_cover_loop.mp4';

const BackgroundCover = () => (
  <div className='BackgroundCover'>
    <div className='fullscreenVideoWrap'>
      <video id='fsVidLoop' src={VideoCoverLoop} preload='auto' playsInline autoPlay muted loop></video>
      <video id='fsVid' src={VideoCover} className='hide-on-small-only' onEnded={() => {$('#fsVid').hide()}} preload='auto' playsInline autoPlay muted></video>
    </div>
  </div>
)

export default BackgroundCover;
