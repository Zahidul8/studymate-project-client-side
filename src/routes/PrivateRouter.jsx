import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRouter = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();
    console.log(location);
    

    if (loading) {
        return <p>Loading ....</p>
        
    }

    if (user) {
        return children;
        
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRouter;