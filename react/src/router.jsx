import {Navigate, createBrowserRouter} from "react-router-dom";
import Login from "./views/login";
import Singup from "./views/singup";
import Users from "./views/users";
import NotFound from "./views/notFound";
import DefaultLayout from "./components/DefaultLayout"
import GuestLayout from "./components/GuestLayout"
import Dashboard from "./views/Dashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: "/",
                element: <Navigate to="/users" />
            },
            {
                path: '/dashboard',
                element: <Dashboard/>,
            },
            {
                path: '/users',
                element: <Users/>,
            },
        ],
    },
    {
        path: '/',
        element: <GuestLayout/>,
        children: [
            {
                path: '/login',
                element: <Login/>,
            },
            {
                path: '/singup',
                element: <Singup/>,
            },
        ],
    },
    
    
    {
        path: '*',
        element: <NotFound/>
    },

])

export default router;