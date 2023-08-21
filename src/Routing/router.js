import {createBrowserRouter} from "react-router-dom";
import {Layout} from "../components";
import RickMortyContainer from "../components/RickMortyContainer/RickMortyContainer";
import React from "react";
import Characters from "../components/RickMortyContainer/Characters/Characters";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: 'episodes/',
                element: <RickMortyContainer/>,
                children: [
                    // {
                    //     path: ':id'
                    //     element: ''
                    // }
                ]
            },
            {
                path: 'characters/',
                element: <Characters/>
            }
        ]
    }
])

export {router}