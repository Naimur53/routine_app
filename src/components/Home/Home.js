import { Box, Button, Container, Grid, Modal, Typography } from "@mui/material";
import React from "react";
import DashboardTab from "../ShareComponents/DashboardTab/DashboardTab";
import MainLayout from "../ShareComponents/MainLayout/MainLayout";
import ModalProvider from "../ShareComponents/Modal/ModalProvider";
import HomeClassShow from "./smallCompo/HomeClassShow/HomeClassShow";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import NoteIcon from "@mui/icons-material/Note";
import HomeNoteShow from "../MyNote/HomeNoteShow";
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
            <Grid item md={6}>
              <h6 className="text-s hidden md:block dashboard_link active_dashboard_link p-2 ">
                <NoteIcon sx={{ mr: 1, ml: 1 }} /> My Notes
              </h6>
            </Grid>
            <Grid item md={5}>
              <div>
                <Button onClick={handleOpen}>
                  Add Note
                  <NoteAddIcon sx={{ ml: 1 }} />
                </Button>
                <ModalProvider open={open} onClose={handleClose} />
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid md={6} xs={12}>
              <HomeNoteShow />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Home;
