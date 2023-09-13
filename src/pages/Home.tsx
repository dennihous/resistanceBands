import React from 'react';
import ResistanceBandList from '../features/ResistanceBandList';
import YoutubeVideo from '../features/YoutubeVideo/YoutubeVideo';

const bands = [
  { name: 'Band 1', imageUrl: '/images/BlackBand.png' },
  { name: 'Band 4', imageUrl: '/images/PurpleBand.png' },
  { name: 'Band 3', imageUrl: '/images/GreenBand.png' },
  { name: 'Band 2', imageUrl: '/images/BlueBand.png' },
];

export default function Home() {
  return (
    <div>
      <ResistanceBandList bands={bands} />
      <YoutubeVideo />
    </div>
  );
}