import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

const App = () => {
  return <div>Resistance Bands</div>;
};

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container as Element);
root.render(<App />);