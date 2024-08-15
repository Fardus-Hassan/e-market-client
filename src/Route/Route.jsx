import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Pages/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";

const Route = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <h1>error</h1>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },

        ],
        

    },
    {
        path: "/login",
        element: <Login></Login>,
    },
    {
        path: "/register",
        element: <Register></Register>,
    }
  ]);

export default Route;