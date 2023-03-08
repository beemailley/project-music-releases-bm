import React from 'react';
import data from 'data.json';
import Header from 'components/Header.js';
import Album from 'components/Album.js'; /* Imports "Album" component */

console.log(data);

export const App = () => {
  return (
    <main>
      <Header />
      <div>
        {data.albums.items.map((album) => {
          return (
            <Album /* Targeting the "Album" component */
              key={album.id} /* Unique value set as the key */
              albumName={album.name} /* Fetching the prop "albumName" from "Album" component */
            />
          )
        })}
      </div>
    </main>
  )
}

/*
{data.albums.items.map((singleAlbumItem) => {
  return (<p>{singleAlbumItem.name}</p>)
})}
*/