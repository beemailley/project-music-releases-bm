import React from 'react';

const Playlist = ({ playlistName, playlistUrl, playlistCover, playlistAbout }) => {
  return (
    <div className="each-playlist">
      <img className="playlist-cover" src={playlistCover}></img>
      <h2>
        <a className="playlist-name" href={playlistUrl}>{playlistName}</a>
      </h2>
      <p className="about-playlist">{playlistAbout}</p>
    </div>
  )

};

export default Playlist;