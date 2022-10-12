import { CircularProgress } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { allData } from '../../ManageState/DataSlice/dataSlice';
// import useFirebase from '../../Hook/useFirebase';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useSelector(allData);

    const location = useLocation();
    if (loading) {
        return <div className='flex justify-center items-center h-screen'>
            <CircularProgress />
        </div>
    }
    if (!user?.email) {
        return <Navigate to='/login' state={{ from: location }} ></Navigate>
    }


    return (
        <>
            {children}
        </>
    );
};

export default PrivateRoute;