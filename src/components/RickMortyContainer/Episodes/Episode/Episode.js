import React, {useEffect} from 'react';
import styles from './Episode.module.css'
import {episodesActions} from "../../../../redux";
import {useDispatch, useSelector} from "react-redux";
import {charactersActions} from "../../../../redux/slices/charactersSlice";

const Episode = ({eachEpisode}) => {
    const {id, name, air_date, episode, characters, url, created} = eachEpisode;

    const handleClick = () => {
        charactersActions.allCharacters()
    }
    return (
        <div className={styles.episode} onClick={() => handleClick()}>
            <h5>id: {id}</h5>
            <h5>name: {name}</h5>
            <h5>air_date: {air_date}</h5>
            <h5>episode: {episode}</h5>
            <h5>url: {url}</h5>
            <h5>created: {created}</h5>
        </div>
    );
};

export {Episode};