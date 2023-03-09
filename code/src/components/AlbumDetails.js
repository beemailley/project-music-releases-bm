import React from 'react';
import Album from './Album.js';

const AlbumDetails = (props) => {
  return (
    <article className="each-album">
      <img className="album-cover" src={props.albumInfo.images[1].url} alt="album cover"/>
      <h2>
        <a className="album-name" href={props.albumInfo.external_urls.spotify}>{props.albumInfo.name}</a>
      </h2>
      <div>
        {props.albumInfo.artists.map((artistInfo) => {
          return (
            <a className="artist-name" href={artistInfo.external_urls.spotify} key={artistInfo.name}>{artistInfo.name} </a>
          )
        })}
      </div>
    </article>
  )
};

export default AlbumDetails; /* If you only have one function to export, use "export default" */
