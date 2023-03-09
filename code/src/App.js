import React from 'react';
import data from './data.json';
import Header from './components/Header.js';
import Album from './components/Album.js';

export const App = () => {
  return (
    <body>
      <header>
        <Header />
      </header>
      <main>
        <Album albumData={data} />
      </main>
    </body>
  )
};