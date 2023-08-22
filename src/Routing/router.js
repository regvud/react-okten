import {createBrowserRouter} from "react-router-dom";
import {Layout} from "../components";
import RickMortyContainer from "../components/RickMortyContainer/RickMortyContainer";
import React from "react";
import CharactersContainer from "../components/RickMortyContainer/Characters/CharactersContainer";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <RickMortyContainer/>
            },
            {
                path: 'characters/',
                element: <CharactersContainer/>
            }
        ]
    }
])

export {router}