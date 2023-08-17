import React from 'react';

const Episode = ({eachEpisode}) => {
    const {id, name, air_date, episode, characters, url, created} = eachEpisode;

    return (
        <div>
            <hr/>
            <h5>{id}</h5>
            <h5>{name}</h5>
            <h5>{air_date}</h5>
            <h5>{episode}</h5>
            <h5>{characters}</h5>
            <h5>{url}</h5>
            <h5>{created}</h5>
        </div>
    );
};

export default Episode;