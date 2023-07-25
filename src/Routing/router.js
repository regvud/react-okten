import {createBrowserRouter} from "react-router-dom";
import Root from "./Root";
import {RoutingUrls} from "./RoutingUrls";
import TodosContainer from "../components/Todos/TodosContainer/TodosContainer";
import CommentsContainer from "../components/Comments/Comment/CommentsContainer";
import Albums from "../components/Albums/Albums";

export const router = createBrowserRouter([
    {
        path: RoutingUrls.MAIN,
        element: <Root/>,
    },
    {
        path: RoutingUrls.TODOS,
        element: <TodosContainer/>,
    },
    {
        path: RoutingUrls.COMMENTS,
        element: <CommentsContainer/>,
    },
    {
        path: RoutingUrls.ALBUMS,
        element: <Albums/>,
    },
]);