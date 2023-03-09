import React from 'react';
import Album from './Album';

const AlbumDetails = (props) => {
  return (
    <article className="each-album">
    <img src={props.albumInfo.images[1].url} alt="album cover"/>
    <p className="album-title">{props.albumInfo.name}</p>
    <div className="artist-names">
      {props.albumInfo.artists.map((artistInfo) => {
        return (
          <span key={artistInfo.name}>{artistInfo.name} </span>
        )
      })}
    </div>
    </article>
  )
};

export default AlbumDetails; /* If you only have one function to export, use "export default" */
