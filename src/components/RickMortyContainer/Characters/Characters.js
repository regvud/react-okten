import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {charactersActions} from "../../../redux/slices/charactersSlice";
import Character from "./Character/Character";

const Characters = () => {
    const {characters} = useSelector(state => state.characters)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(charactersActions.allCharacters())
    }, [dispatch]);
    console.log(characters)
    return (
        <div>
            {characters?.map(character => <Character key={character.id} character={character}/>)}
        </div>
    )
};

export default Characters;