import React from 'react';
import YouTube from 'react-youtube';
import './YoutubeVideo.scss'

type YoutubeVideoProps = {
  videoId: string;
}

export default function YoutubeVideo({ videoId }: YoutubeVideoProps) {
  return (
    <div className="youtube-video">
      <YouTube videoId={videoId} />
    </div>
  )
}