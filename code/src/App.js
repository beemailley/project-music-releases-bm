import React from 'react';
import data from 'data.json';
import Header from 'components/Header.js'; /* Imports "Header" component */
import Album from 'components/Album.js'; /* Imports "Album" component */
//import AlbumDetails from 'components/AlbumDetails'; /* Imports "AlbumDetails" component */

console.log(data);

export const App = () => {
  return (
    <section>
      <Header title="Albums & Singles" />
      <Album albumData={data} />
    </section>
  )
}