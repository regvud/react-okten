import React from 'react';

const AlbumComponent = ({album}) => {
    const {userId, id, title} = album
    return (
        <div>
            <h3>userId: {userId}</h3>
            <h3>id: {id}</h3>
            <h3>title: {title}</h3>
        </div>
    );
};

export default AlbumComponent;