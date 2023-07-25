import {createBrowserRouter} from "react-router-dom";
import Root from "./Root";
import {RoutingUrls} from "./RoutingUrls";
import TodosContainer from "../components/Todos/TodosContainer/TodosContainer";
import CommentsContainer from "../components/Comments/Comment/CommentsContainer";

export const router = createBrowserRouter([
    {
        path: RoutingUrls.MAIN,
        element: <Root/>,
    },
    {
        path: RoutingUrls.USERS,
        element: <TodosContainer/>,
    },
    {
        path: RoutingUrls.COMMENTS,
        element: <CommentsContainer/>,
    },
]);