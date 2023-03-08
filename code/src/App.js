import React from 'react';
import data from 'data.json';
import Header from 'components/Header.js'; /* Imports "Header" component */
import Album from 'components/Album.js'; /* Imports "Album" component */
import Artists from 'components/Artists'; /* Imports "Artists" component */

console.log(data);

export const App = () => {
  return (
    <main>
      <Header />
      <div>
        {data.albums.items.map((album) => {
          return (
            <div>
              <Album /* Targeting the "Album" component */
                key={album.id} /* Unique value set as the key */
                coverImage={album.images[0].url} /* Fetching prop "coverImage"  */
                albumName={album.name} /* Fetching prop "albumName" */
              />
              <Artists /* Targeting the "Artists" component */
                key={album.artists[0].id}
                artistName={album.artists[0].name} /* Fetching prop "artistName" */
              />
            </div>
          )
        })}
      </div>
    </main>
  )
}