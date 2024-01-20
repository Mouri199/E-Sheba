import { createBrowserRouter } from "react-router-dom";
import MainBody from "../Components/MainBody/MainBody";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Contact from "../Components/Contacts/Contact";
import Doctors from "../Components/Doctors/Doctors";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainBody></MainBody>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: '/doctor',
                element: <Doctors> </Doctors>
            }
        ]
    }
])