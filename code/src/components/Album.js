import React from 'react';
import { AlbumList } from './AlbumList';

export const Album = (props) => {
  return (
    <article className="album-title">
        <p>{props.albumDetails.name}</p>
    </article>
)
}

