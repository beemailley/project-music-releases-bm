import React from 'react';
import { Album } from './Album';

export const AlbumList = (props) => {
    return (
        <section>
                {props.albumData.albums.items.map((singleAlbum) => {
                    return (
                        <Album key={singleAlbum.items.id} albumDetails={singleAlbum} />
                    )
                }
                )}

        </section>
    );
};