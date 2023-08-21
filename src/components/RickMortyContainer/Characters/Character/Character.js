import React from 'react';

const Character = ({character}) => {
    const {id, name, gender, image, episode, status, url} = character
    return (
        <div>
            <hr/>
            <h3>{id}</h3>
            <h3>{name}</h3>
            <h3>{gender}</h3>
            <h3>{image}</h3>
            <h3>{episode}</h3>
            <h3>{status}</h3>
            <h3>{url}</h3>
        </div>
    );
};

export default Character;