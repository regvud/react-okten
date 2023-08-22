import {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {charactersActions} from "../redux";

export const useCharacters = (charactersIDs) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(charactersActions.getMultipleCharacters({charactersIDs}))
    }, [dispatch]);

};

