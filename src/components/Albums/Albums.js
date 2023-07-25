import React, {useEffect, useState} from 'react';
import {albumsServices} from "../../services/albumsServices";
import AlbumComponent from "./Album/AlbumComponent";

const Albums = () => {
    const [albums, setAlbums] = useState(null)
    useEffect(() => {
        albumsServices.getAll().then(({data}) => setAlbums(data))
    }, [])
    return (
        <div>
            {albums?.map((album, id) => <AlbumComponent album={album} key={id}/>)}
        </div>
    );
};

export default Albums;