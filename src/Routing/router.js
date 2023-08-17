import {createBrowserRouter} from "react-router-dom";
import RickMortyContainer from "../components/RickMortyContainer/RickMortyContainer";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RickMortyContainer/>
    }
])

export {router}