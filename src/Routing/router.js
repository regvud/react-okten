import {createBrowserRouter} from "react-router-dom";
import {Episode, Layout} from "../components";
import RickMortyContainer from "../components/RickMortyContainer/RickMortyContainer";
import React from "react";
import Character from "../components/RickMortyContainer/Characters/Character/Character";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: 'episodes/',
                element: <RickMortyContainer/>,
                children: [
                    {
                        path: ':id',
                        element: <Episode/>
                    }
                ]
            },
            {
                path: 'characters/',
                element: <Character/>
            }
        ]
    }
])

export {router}