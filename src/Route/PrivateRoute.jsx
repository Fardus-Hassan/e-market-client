import { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { GlobalStateContext } from "../Global/GlobalContext";



const PrivateRoute = ({ children }) => {

    const { user, loading, setLoading } = useContext(GlobalStateContext);
    const location = useLocation();

    console.log(user);

     if (loading) {
        return <h1>Loading...</h1>
    }
    else if (user) {
        return children
    }
    else {
        return <Navigate to="/login" state={location?.pathname || "/"} replace={true} />
    }
};

export default PrivateRoute;