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
        <Header title="New albums and singles" />
      </header>
      <Playlist playlistData={json} />
      <section className="AlbumsAndSingles-container">
        <div className="singles-header">
          <SectionHeader title="Singles" />
        </div>
        <Singles singlesData={data} />
        <div className="albums-header">
          <SectionHeader title="Albums" />
        </div>
        <Album albumData={data} />
      </section>
    </main>

  )
};