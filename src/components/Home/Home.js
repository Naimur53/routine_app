import { Box, Button, Container, Grid, Modal, Typography } from "@mui/material";
import React from "react";
import DashboardTab from "../ShareComponents/DashboardTab/DashboardTab";
import MainLayout from "../ShareComponents/MainLayout/MainLayout";
import ModalProvider from "../ShareComponents/Modal/ModalProvider";
import HomeClassShow from "./smallCompo/HomeClassShow/HomeClassShow";

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <MainLayout>
      <Grid container>
        <Grid item xs={12} md={8}>
          <HomeClassShow></HomeClassShow>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container>
            <Grid item md={7}>
              <div className="text-xl hidden md:block ">My notes</div>
            </Grid>
            <Grid item md={5}>
              <div>
                <Button onClick={handleOpen}>Add Note</Button>
                <ModalProvider open={open} onClose={handleClose} />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Home;
