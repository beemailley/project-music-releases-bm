import React from 'react';
import data from 'data.json';
import Header from 'components/Header.js'; /* Imports "Header" component */
import SectionHeader from 'components/SectionHeader.js';
import Album from 'components/Album.js'; /* Imports "Album" component */
import Singles from 'components/Singles';

console.log(data);

export const App = () => {
  return (
    <body>
      <header>
        <Header title="Albums and Singles" />
      </header>
      <main>
        <SectionHeader title="Singles" />
        <Singles singlesData={data} />
        <SectionHeader title="Albums" />
        <Album albumData={data} />
      </main>
    </body>
  )
};