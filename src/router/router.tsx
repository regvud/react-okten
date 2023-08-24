import {createBrowserRouter} from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import CarsPage from "../pages/CarsPage";

const router = createBrowserRouter([
        {
            path: '',
            element: <RootLayout/>,
            children: [
                {
                    index: true,
                    element: <CarsPage/>
                }
            ]
        }
    ]
)

export {
    router
}