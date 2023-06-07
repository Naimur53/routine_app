import { Container, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { allData } from '../../ManageState/DataSlice/dataSlice';
import MainLayoutTab from '../ShareComponents/MainLayoutTab/MainLayoutTab';

const Dashboard = () => {
    const { user } = useSelector(allData)
    const location = useLocation();
    if (!user?.isAdmin) {

        toast.error('Your are not authorize!!!')
        return <Navigate to='/login' state={{ from: location }} ></Navigate>
    }
    return (
        <div className=' '>
            <Container maxWidth="xxl" >
                <div className="block md:flex ">
                    <div className="mainLayoutTabWidth hidden md:block bg-white ">
                        <div className="fixed custom_height overflow-y-auto  left-0 bg-white mainLayoutTabWidth">
                            <MainLayoutTab dashboard={true}></MainLayoutTab>
                        </div>
                    </div>
                    <div className="w-full md:w-[calc(100vw-300px)]   p-2 mt-20">
                        <Grid container>
                            <Grid item xs={12} md={12}>
                                <div>
                                    <Outlet></Outlet>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Dashboard;