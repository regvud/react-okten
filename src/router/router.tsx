import {createBrowserRouter} from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import CarsPage from "../pages/CarsPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const router = createBrowserRouter([
        {
            path: '',
            element: <RootLayout/>,
            children: [
                {
                    index: true,
                    element: <CarsPage/>
                },
                {
                    path: 'login',
                    element: <LoginPage/>,
                },
                {
                    path: 'register',
                    element: <RegisterPage/>,
                },
            ],
        },
    ]
)

export {
    router
}