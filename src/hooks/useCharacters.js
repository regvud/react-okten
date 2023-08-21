import {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {charactersActions} from "../redux/slices/charactersSlice";

export const useCharacters = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(charactersActions.allCharacters())
    }, []);
};

