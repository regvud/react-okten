import React, {useEffect} from 'react';
import {episodesActions} from "../../../redux";
import {useDispatch, useSelector} from "react-redux";
import Episode from "./Episode/Episode";

const Episodes = () => {
    const dispatch = useDispatch();
    const {episodes} = useSelector(state => state.episodes);

    useEffect(() => {
        dispatch(episodesActions.allEpisodes())
    }, [dispatch]);

    return (
        <div>
            {episodes.map((eachEpisode, id) => <Episode key={id} eachEpisode={eachEpisode}/>)}
        </div>
    );
};

export default Episodes;

