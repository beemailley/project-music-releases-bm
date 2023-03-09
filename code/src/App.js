import React from 'react';
import data from './data.json';
import Header from './components/Header.js';
import Album from './components/Album.js';

import Playlist from './components/Playlist.js';
import json from './stretch-goal.json';

console.log(json);

export const App = () => {
  return (
    <main>
      <header>
        <Header />
      </header>
      <section className="playlist-section">
        <div className="playlist-header">
          <h2>Playlists</h2>
        </div>
        {json.playlists.items.map((playlist) => {
          return (
            <Playlist
              playlistCover={playlist.images[0].url}
              playlistName={playlist.name}
              playlistUrl={playlist.external_urls.spotify}
              playlistAbout={playlist.description} />
          )
        })}
      </section>
      <Album albumData={data} />
    </main>
  )
};