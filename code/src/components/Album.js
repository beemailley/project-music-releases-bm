import React from 'react';
import AlbumDetails from './AlbumDetails'

const Album = (props) => {
  return (
    <section>
      {props.albumData.albums.items.map((singleAlbum) => {
        return (
          <AlbumDetails key={singleAlbum.id} albumInfo={singleAlbum} />
        
        )

      })}
      
    </section>
  )
};

export default Album; /* If you only have one function to export, use "export default" */

