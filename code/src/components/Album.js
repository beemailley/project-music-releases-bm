import React from 'react';

const Album = ({ coverImage, albumName }) => {
  return (
    <div>
      <img src={coverImage} alt="album cover" />
      {albumName}
    </div>
  )
};

export default Album; /* If you only have one function to export, use "export default" */

