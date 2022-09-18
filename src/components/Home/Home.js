import { Container, Grid } from "@mui/material";
import React from "react";
import DashboardTab from "../ShareComponents/DashboardTab/DashboardTab";
import MainLayout from "../ShareComponents/MainLayout/MainLayout";
import HomeClassShow from "./smallCompo/HomeClassShow/HomeClassShow";

const Home = () => {
  return (
    <MainLayout>
      <Grid container>
        <Grid item xs={12} md={8}>
          <HomeClassShow></HomeClassShow>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="text-xl hidden md:block h-[cal()]" >My notes</div>
        </Grid>



      </Grid>

    </MainLayout>
  );
};

export default Home;
