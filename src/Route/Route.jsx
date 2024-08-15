import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Pages/Home";

const Route = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <h1>error</h1>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            }
        ],

    },
  ]);

export default Route;