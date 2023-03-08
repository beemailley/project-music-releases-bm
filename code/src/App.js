import React from 'react';
import data from './data.json';
import { AlbumList } from './components/AlbumList';

console.log(data);

export const App = () => {
  return (
    <div>
      Find me in src/app.js!
      <AlbumList albumData={data} />
    </div>
  );
}

/*

{data.albums.items.map((singleAlbumItem) => {
  return (<p>{singleAlbumItem.name}</p>)
})}

*/