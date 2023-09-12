import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './features/TopBar';
import ResistanceBandList from './features/ResistanceBandList';

const bands = [
  { name: 'Band 1', imageUrl: '/images/BlackBand.png' },
  { name: 'Band 4', imageUrl: '/images/PurpleBand.png' },
  { name: 'Band 3', imageUrl: '/images/GreenBand.png' },
  { name: 'Band 2', imageUrl: '/images/BlueBand.png' },
];

const App = () => {
  return (
    <div>
      <TopBar />
      <ResistanceBandList bands={bands} />
    </div>
  );
};

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container as Element);
root.render(<App />);