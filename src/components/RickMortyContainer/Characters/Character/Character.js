import React from 'react';

const Character = ({character}) => {
    const {id, name, gender, image, status, url} = character
    return (
        <div>
            <hr/>
            <h2>{id}</h2>
            <h1>{name}</h1>
            <h3>{gender}</h3>
            <img src={image} alt="image"/>
            <h3>{status}</h3>
            <h3>{url}</h3>
        </div>
    );
};

export default Character;