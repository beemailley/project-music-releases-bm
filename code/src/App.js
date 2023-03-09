import React from 'react';
import data from 'data.json';
import Header from 'components/Header.js'; /* Imports "Header" component */
import Album from 'components/Album.js'; /* Imports "Album" component */

console.log(data);

export const App = () => {
  return (
    <body>
      <header>
        <Header />
      </header>
      <main>
        <Album albumData={data} />
      </main>
    </body>
  )
}