import { Container, Grid } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import MainLayoutTab from '../ShareComponents/MainLayoutTab/MainLayoutTab';

const Dashboard = () => {
    return (
        <div>
            <Container maxWidth="xxl">
                <div className="block md:flex">
                    <div className="w-[340px] hidden md:block">
                        <div className="fixed custom_height overflow-y-auto left-0 w-[340px] ">
                            <MainLayoutTab dashboard={true}></MainLayoutTab>
                        </div>
                    </div>
                    <div className="w-full md:w-[calc(100vw-340px)]   ">
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