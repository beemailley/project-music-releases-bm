import React from 'react';
import data from 'data.json';
import Header from 'components/Header.js'; /* Imports "Header" component */
import Album from 'components/Album.js'; /* Imports "Album" component */
import Playlist from './components/Playlist.js';
import json from './stretch-goal.json';

console.log(json);

export const App = () => {
  return (
    <main>
      <header>
        <Header />
      </header>
      <Playlist playlistData={json}/>
      <Album albumData={data} />
    </main>
  )
};