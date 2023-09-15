import React from 'react';
import ResistanceBandList from '../features/ResistanceBand/ResistanceBandList';
import YoutubeVideo from '../features/YoutubeVideo/YoutubeVideo';

const bands = [
  { id: 1, name: '20Kg Band', imageUrl: '/images/RedBand.png', price: '5.99' },
  { id: 2, name: '40Kg Band', imageUrl: '/images/BlackBand.png', price: '5.99' },
  { id: 3, name: '60Kg Band', imageUrl: '/images/PurpleBand.png', price: '5.99' },
  { id: 4, name: '80Kg Band', imageUrl: '/images/GreenBand.png', price: '5.99' },
  { id: 5, name: '100Kg Band', imageUrl: '/images/BlueBand.png', price: '5.99' },
  { id: 6, name: 'Band Collection', imageUrl: '/images/CollectionBands.png', price: '23.99' },
];

export default function Home() {
  return (
    <div>
      <ResistanceBandList bands={bands} />
      <YoutubeVideo />
    </div>
  );
}