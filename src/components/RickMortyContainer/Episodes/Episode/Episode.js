import React from 'react';
import styles from './Episode.module.css'
import {useNavigate} from "react-router-dom";

const Episode = ({eachEpisode}) => {
    const {id, name, air_date, episode, characters, url, created} = eachEpisode;
    const navigate = useNavigate();


    const handleClick = () => {
        const ids = characters.map(character => character.split('/').slice(-1)[0])
        navigate('characters/', {state: {ids, name}})
    }

    return (
        <div className={styles.episode}>
            <h5>id: {id}</h5>
            <h5>name: {name}</h5>
            <h5>air_date: {air_date}</h5>
            <h5>episode: {episode}</h5>
            <h5>url: {url}</h5>
            <h5>created: {created}</h5>
            <button onClick={handleClick}>see characters</button>
        </div>
    );
};

export {Episode};