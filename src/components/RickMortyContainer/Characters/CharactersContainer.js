import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {charactersActions} from "../../../redux";
import Character from "./Character/Character";

const CharactersContainer = () => {
    const {state: {ids}} = useLocation();
    const dispatch = useDispatch();
    const {episodeCharacters} = useSelector(state => state.characters);


    useEffect(() => {
        dispatch(charactersActions.getMultipleCharacters({ids}))
    }, []);

    return (
        <div>
            {episodeCharacters?.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export default CharactersContainer;