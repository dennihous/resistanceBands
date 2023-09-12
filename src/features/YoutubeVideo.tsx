import React from 'react';
import ReactPlayer from 'react-player/youtube'
import './YoutubeVideo.scss'

export default function YouTubeVideo() {
  return (
    <div>
      <ReactPlayer className='youtube-video' url='https://www.youtube.com/watch?v=_rdC4T95e88&ab_channel=Dr.NateFeehrer%2CPhysicalTherapist' />
    </div>
  );
};