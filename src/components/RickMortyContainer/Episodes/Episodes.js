import React, {useEffect} from 'react';
import {episodesActions} from "../../../redux";
import {useDispatch, useSelector} from "react-redux";
import Episode from "./Episode/Episode";

const Episodes = () => {
    const dispatch = useDispatch();
    const episodes = useSelector(state => state.episodes);

    useEffect(() => {
        dispatch(episodesActions.allEpisodes())
    }, [dispatch]);


    return (
        <div>
            {episodes?.map((episode, id) => <Episode key={id} episode={episode}/>)}
        </div>
    );
};

export default Episodes;

