import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Stack,
  Grid,
  Paper,
  Typography,
  IconButton,
  CircularProgress,
} from "@mui/material";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CountUp from "react-countup";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import RecentMomentChart from "../../DashboradComponents/GraphCharts/RecentMomentChart";
import RoundedServiceCart from "../../DashboradComponents/GraphCharts/RoundedServiceCart";
import axios from "axios";
import {
  recentMoment,
  totalApproveOrders,
  totalEarning,
  totalOrders,
  totalSales,
} from "../../../../utilities/dataAnalize";
import MainLayout from "../../../ShareComponents/MainLayout/MainLayout";
import TinyAreaChart from "../../DashboradComponents/GraphCharts/TinyAreaChart";
import BarChartCompo from "../../DashboradComponents/GraphCharts/BarChartCompo";
import AllRequestRoutines from "../AllRequestRoutines/AllRequestRoutines";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
const Overview = () => {
  const [getLoading, setGetLoading] = useState(true);
  // start
  const [routineInfo, setRoutineInfo] = useState({
    totalRoutine: 0,
    totalRoutineUsing: 0,
    routineStatus: [],
    totalUser: 0,
  });
  const [requestInfo, setRequestInfo] = useState({
    pending: 0,
    approve: 0,
    rejected: 0,
  });

  // my work
  useEffect(() => {
    setGetLoading(true);
    const getRoutineInfo = axios.get(
      "https://routine-app-server-main.onrender.com/admin/totalRoutineUsing"
    );
    const getRoutineStatus = axios.get(
      "https://routine-app-server-main.onrender.com/admin/routineStatus?len=10"
    );
    const getRequestInfo = axios.get(
      "https://routine-app-server-main.onrender.com/admin/requestStatus"
    );
    const getUserCount = axios.get(
      "https://routine-app-server-main.onrender.com/admin/userCount"
    );
    axios
      .all([getRoutineInfo, getRoutineStatus, getRequestInfo, getUserCount])
      .then(
        axios.spread((...responses) => {
          setRoutineInfo({
            ...responses[0].data,
            routineStatus: responses[1].data,
            totalUser: responses[3].data,
          });
          setRequestInfo(responses[2].data);
        })
      )
      .catch((errors) => {
        // react on errors.
      })
      .finally(() => setGetLoading(false));
  }, []);

  if (getLoading) {
    return (
      <Stack alignItems="center">
        <CircularProgress></CircularProgress>
      </Stack>
    );
  }
  return (
    <div className="">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Grid container spacing={2} sx={{ height: "100%" }}>
            <Grid item xs={12}>
              <Paper elevation={3}>
                <div className="flex justify-between px-4 pt-4 pb-2">
                  <div className="">
                    <h2 className="font-bold mb-2">Total Using</h2>
                    <p className="text-sm text-gray-400">January-july 2002</p>
                  </div>
                  <div>
                    <h1 className="font-bold text-dark-purple text-lg">
                      <CountUp end={routineInfo.totalRoutineUsing}></CountUp>
                    </h1>
                  </div>
                </div>
                <TinyAreaChart data={routineInfo.routineStatus}></TinyAreaChart>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body1">Routine</Typography>
                  <IconButton
                    sx={{
                      background: "#f6f4ff",
                      color: "#5946ad",
                    }}
                  >
                    {" "}
                    <LibraryBooksIcon></LibraryBooksIcon>
                  </IconButton>
                </Box>
                <h2 className="text-center text-3xl font-bold">
                  <CountUp end={routineInfo.totalRoutine} />
                </h2>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body1">User</Typography>
                  <IconButton
                    sx={{
                      background: "#f6f4ff",
                      color: "#5946ad",
                    }}
                  >
                    {" "}
                    <PeopleAltIcon></PeopleAltIcon>
                  </IconButton>
                </Box>
                <h2 className="text-center text-3xl font-bold">
                  <CountUp end={routineInfo.totalUser} />
                </h2>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={8}>
          {/* <RecentMomentChart data={allData.recentMoment}></RecentMomentChart> */}
          <Paper elevation={3} className="pb-4">
            <div className="p-4 pl-5">
              <h2 className="text-lg font-bold">Routine status</h2>
              <p className="text-gray-400">last 10</p>
            </div>
            <BarChartCompo data={routineInfo.routineStatus}></BarChartCompo>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <RoundedServiceCart allData={requestInfo}></RoundedServiceCart>
        </Grid>
        <Grid item xs={12} md={9}>
          {/* <OrdersTable allOrders={allOrders}></OrdersTable> */}
          <Paper elevation={3}>
            <AllRequestRoutines short></AllRequestRoutines>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Overview;
