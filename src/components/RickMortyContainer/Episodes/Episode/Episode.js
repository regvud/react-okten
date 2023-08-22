import React, {useEffect, useState} from 'react';
import styles from './Episode.module.css'
import {useDispatch, useSelector} from "react-redux";
import {charactersActions} from "../../../../redux";

const Episode = ({eachEpisode}) => {
    const {id, name, air_date, episode, characters, url, created} = eachEpisode;
    // const {episodeCharacters} = useSelector(state => state.episodeCharacters)
    // console.log(episodeCharacters)
    const charactersIDs = []

    characters.forEach(value => {
        const start = value.lastIndexOf('/')
        const id = value.slice(start + 1, value[-1])
        charactersIDs.push(id)
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(charactersActions.getMultipleCharacters({charactersIDs}))
    }, [dispatch]);



    return (
        <div className={styles.episode}>
            <h5>id: {id}</h5>
            <h5>name: {name}</h5>
            <h5>air_date: {air_date}</h5>
            <h5>episode: {episode}</h5>
            <h5>url: {url}</h5>
            <h5>created: {created}</h5>
            <button>see characters</button>
        </div>
    );
};

export {Episode};