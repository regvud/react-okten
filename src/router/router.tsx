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
                    element: <RegisterPage/>
                },
                {
                    path: 'login',
                    element: <LoginPage/>,
                },
                {
                    path: 'cars',
                    element: <CarsPage/>,
                },
            ],
        },
    ]
)

export {
    router
}