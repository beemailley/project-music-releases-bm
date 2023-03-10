import React from 'react';
import AlbumDetails from './AlbumDetails';

const Album = (props) => {
  return (
    <div className="album-container">
      {props.albumData.albums.items.map((singleAlbum) => {
        if (singleAlbum.album_type === 'album') {
          return (
            <AlbumDetails key={singleAlbum.id} albumInfo={singleAlbum} />
          )
        }
      })}
    </div>
  )
};

export default Album;