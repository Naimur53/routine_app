import React, { useState, useEffect } from 'react';
import { Box, Container, Stack, Grid, Paper, Typography, IconButton, CircularProgress } from '@mui/material';
import { Area, AreaChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import CountUp from 'react-countup';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import RecentMomentChart from '../../DashboradComponents/GraphCharts/RecentMomentChart';
import RoundedServiceCart from '../../DashboradComponents/GraphCharts/RoundedServiceCart';
import axios from 'axios';
import { recentMoment, totalApproveOrders, totalEarning, totalOrders, totalSales } from '../../../../utilities/dataAnalize';
import MainLayout from '../../../ShareComponents/MainLayout/MainLayout';
import TinyAreaChart from '../../DashboradComponents/GraphCharts/TinyAreaChart';
import BarChartCompo from '../../DashboradComponents/GraphCharts/BarChartCompo';

const Overview = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [allProvider, setAllProvider] = useState([]);
    const [serviceCount, setServiceCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [allData, setAllData] = useState({
        recentMoment: [],
        earning: 0,
        sales: 0,
        orders: 0,
        providers: 0,
        ordersApprove: 0,
        totalService: 0,

    });
    useEffect(() => {
        setLoading(true);
        let one = "https://dry-sea-00611.herokuapp.com/orders/"
        let two = "https://dry-sea-00611.herokuapp.com/provider/allProvider"
        let three = "https://dry-sea-00611.herokuapp.com/singleservice/count"
        const requestOne = axios.get(one);
        const requestTwo = axios.get(two);
        const requestThree = axios.get(three);
        axios.all([requestOne, requestTwo, requestThree])
            .then(
                axios.spread((...responses) => {
                    setAllOrders(responses[0].data)
                    setAllProvider(responses[1].data);
                    setServiceCount(responses[2].data.count)
                })).catch(errors => {
                    // react on errors.
                }).finally(() => setLoading(false))
    }, [])

    useEffect(() => {
        if (!loading) {
            setAllData(state => {
                return {
                    recentMoment: recentMoment(allOrders),
                    earning: totalEarning(allOrders),
                    sales: totalSales(allOrders),
                    orders: totalOrders(allOrders),
                    ordersApprove: totalApproveOrders(allOrders),
                    providers: allProvider.length,
                    totalService: serviceCount,
                }
            })
        }
    }, [loading])
    if (loading) {
        return <Stack alignItems='center' >
            <CircularProgress></CircularProgress>
        </Stack >
    }
    return (
        <div className=''>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Grid container spacing={2} sx={{ height: '100%' }}>
                        <Grid item xs={12}>
                            <div>
                                <div className='flex justify-between'>
                                    <div>
                                        <h2 className='font-bold mb-2'>Total Using</h2>
                                        <p className='text-sm text-gray-400'>January-july 2002</p>
                                    </div>
                                    <div>
                                        <h1 className='font-bold text-dark-purple text-lg'>50332</h1>
                                    </div>
                                </div>
                                <TinyAreaChart></TinyAreaChart>
                            </div>

                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Paper elevation={3} sx={{ p: 2 }}>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: "space-between"
                                }}>
                                    <Typography variant='body1' >Service Provider</Typography>
                                    <IconButton
                                        sx={{
                                            background: 'hsl(215deg 69% 90%)',
                                            color: 'hsl(215deg 70% 71%)'
                                        }}
                                    > <HomeRepairServiceIcon></HomeRepairServiceIcon></IconButton>
                                </Box>
                                <Typography variant='h5' gutterBottom><CountUp end={allData.providers} /></Typography>
                                <Typography color='hsl(120deg 30% 75%)' variant='body1' component={'span'}>Good</Typography>
                                <Typography variant='body1' component={'span'}> lever provider</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Paper elevation={3} sx={{ p: 2 }}>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: "space-between"
                                }}>
                                    <Typography variant='body1' >Orders</Typography>
                                    <IconButton
                                        sx={{
                                            background: 'hsl(215deg 69% 90%)',
                                            color: 'hsl(215deg 70% 71%)'
                                        }}
                                    > <LocalGroceryStoreIcon></LocalGroceryStoreIcon></IconButton>
                                </Box>
                                <Typography variant='h5' gutterBottom><CountUp end={allData.orders} /></Typography>
                                <Typography color='red' variant='body1' component={'span'}>Bad</Typography>
                                <Typography variant='body1' component={'span'}> orders </Typography>
                            </Paper>
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={12} md={8}>
                    {/* <RecentMomentChart data={allData.recentMoment}></RecentMomentChart> */}
                    <div className='shadow-lg p-2'>
                        <div className='p-4'>
                            <h2 className='text-lg font-bold'>Routine status</h2>
                            <p className='text-gray-400'>last 10</p>
                        </div>
                        <BarChartCompo></BarChartCompo>
                    </div>
                </Grid>
                <Grid item xs={12} md={3}>
                    <RoundedServiceCart allData={allData}></RoundedServiceCart>
                </Grid>
                <Grid item xs={12} md={9}>
                    {/* <OrdersTable allOrders={allOrders}></OrdersTable> */}
                </Grid>
            </Grid>


        </div>
    );
};

export default Overview;