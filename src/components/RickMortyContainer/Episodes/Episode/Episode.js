import React, {useEffect} from 'react';
import styles from './Episode.module.css'
import {episodesActions} from "../../../../redux";
import {useDispatch, useSelector} from "react-redux";

const Episode = ({eachEpisode}) => {
    const {id, name, air_date, episode, characters, url, created} = eachEpisode;
    const {episodeByID} = useSelector(state => state.episodes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(episodesActions.byID(id))
    }, [dispatch]);

    console.log(episodeByID);
    return (
        <div className={styles.episode} onClick={() => console.log('click')}>
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