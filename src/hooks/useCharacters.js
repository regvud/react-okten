import {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {charactersActions} from "../redux";

export const useCharacters = (ids) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(charactersActions.getMultipleCharacters({ids}))
    }, [dispatch]);

};

