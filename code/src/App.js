import React from 'react';
import data from 'data.json';
import Header from './components/Header.js';
import SectionHeader from './components/SectionHeader.js';
import Album from './components/Album.js';
import Singles from './components/Singles';
import Playlist from './components/Playlist.js';
import json from './stretch-goal.json';

export const App = () => {
  return (
    <main>
      <header>
        <Header title="Albums and Singles" />
      </header>
      <Playlist playlistData={json}/>
      <SectionHeader title="Singles" />
      <Singles singlesData={data} />
      <SectionHeader title="Albums" />
      <Album albumData={data} />
    </main>

  )
};