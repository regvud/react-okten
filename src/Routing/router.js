import {createBrowserRouter} from "react-router-dom";
import {Layout} from "../components";
import RickMortyContainer from "../components/RickMortyContainer/RickMortyContainer";
import React from "react";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: 'episodes/',
                element: <RickMortyContainer/>,
                children:[
                    // {
                    //     path: ':id'
                    //     element: ''
                    // }
                ]
            }
        ]
    }
])

export {router}