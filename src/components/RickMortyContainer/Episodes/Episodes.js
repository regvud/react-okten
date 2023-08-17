import React, {useEffect} from 'react';
import {episodesActions} from "../../../redux";
import {useDispatch, useSelector} from "react-redux";
import {Episode} from "./Episode/Episode";
import styles from './Episodes.module.css'

const Episodes = ({page}) => {
    const dispatch = useDispatch();
    const {episodes} = useSelector(state => state.episodes);

    useEffect(() => {
        dispatch(episodesActions.allEpisodes({page}))
    }, [page, dispatch]);

    return (
        <div className={styles.episodes}>
            {episodes.results?.map((eachEpisode, id) => <Episode key={id} eachEpisode={eachEpisode}/>)}
        </div>
    );
};

export default Episodes;

