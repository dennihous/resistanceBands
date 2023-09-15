import React from 'react';
import ResistanceBandList from '../features/ResistanceBand/ResistanceBandList';
import YoutubeVideo from '../features/YoutubeVideo/YoutubeVideo';
import bandsData from '../../bandsData.json';

export default function Home() {
  return (
    <div>
      <ResistanceBandList bands={bandsData} />
      <YoutubeVideo />
    </div>
  );
}