import { CircularProgress } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { allData } from '../../ManageState/DataSlice/dataSlice';
// import useFirebase from '../../Hook/useFirebase';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useSelector(allData);

    const location = useLocation();
    console.log('private', window.navigator.onLine)
    if (loading) {
        return <div className='flex justify-center items-center h-screen'>
            <CircularProgress />
        </div>
    }
    if (!user?.email) {
        return <Navigate to='/login' state={{ from: location }} ></Navigate>
    }

    // if (!user.isEmailVerified) {
    //     return <div className='text-center mt-10 text-2xl'>
    //         your Email is not verifed

    //     </div>
    // }

    return (
        <>
            {children}
        </>
    );
};

export default PrivateRoute;