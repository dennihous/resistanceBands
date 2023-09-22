import React from 'react';
import ResistanceBandList from '../features/ResistanceBand/ResistanceBandList';
import bandsData from '../../bandsData.json';

export default function Home() {
  return (
    <div>
      <ResistanceBandList bands={bandsData} />
    </div>
  );
}