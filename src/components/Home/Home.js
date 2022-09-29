import { Box, Button, Container, Grid, Modal, Typography } from "@mui/material";
import React from "react";
import DashboardTab from "../ShareComponents/DashboardTab/DashboardTab";
import MainLayout from "../ShareComponents/MainLayout/MainLayout";
import ModalProvider from "../ShareComponents/Modal/ModalProvider";
import HomeClassShow from "./smallCompo/HomeClassShow/HomeClassShow";
const data = [
  {
    day: "Sunday",
    endTime: "Sat Sep 17 2022 03:30:00 GMT+0600 (Bangladesh Standard Time)",
    startTime: "Sat Sep 17 2022 02:00:00 GMT+0600 (Bangladesh Standard Time)",
    subjectCode: "6645dfd4",
    subjectName: "Fundamental",
    teacherName: "Naimur Rahman",
    roomNumber: '3233',
  },
  {
    day: "Monday",
    endTime: "Sat Sep 17 2022 02:15:00 GMT+0600 (Bangladesh Standard Time)",
    startTime: "Sat Sep 17 2022 01:30:00 GMT+0600 (Bangladesh Standard Time)",
    subjectCode: "6645dfd4",
    subjectName: "physics",
    teacherName: "Sheikh Sadi",
    roomNumber: '3233',
  },
  {
    subjectName: "Chemistry",
    subjectCode: "6645dfd4",
    teacherName: "Ovi Sheikh",
    day: "Monday",
    startTime: "Sat Sep 17 2022 02:30:00 GMT+0600 (Bangladesh Standard Time)",
    endTime: "Sat Sep 17 2022 02:30:00 GMT+0600 (Bangladesh Standard Time)",
    roomNumber: '3233',
  },
  {
    "subjectName": "Biology",
    "subjectCode": "6645dfd4",
    "teacherName": "Akash Hossain",
    "day": "Tuesday",
    "startTime": "Sat Sep 17 2022 03:00:00 GMT+0600 (Bangladesh Standard Time)",
    "endTime": "Sat Sep 17 2022 03:45:00 GMT+0600 (Bangladesh Standard Time)",
    roomNumber: '3233',
  },
  {
    day: "Sunday",
    endTime: "Sat Sep 17 2022 03:30:00 GMT+0600 (Bangladesh Standard Time)",
    startTime: "Sat Sep 17 2022 02:00:00 GMT+0600 (Bangladesh Standard Time)",
    subjectCode: "6645dfd4",
    subjectName: "Fundamental tor main khai mehedi df ddf dfdf d",
    teacherName: "Naimur Rahman",
    roomNumber: '3233',
  },
  {
    day: "Monday",
    endTime: "Sat Sep 17 2022 02:15:00 GMT+0600 (Bangladesh Standard Time)",
    startTime: "Sat Sep 17 2022 01:30:00 GMT+0600 (Bangladesh Standard Time)",
    subjectCode: "6645dfd4",
    subjectName: "physics",
    teacherName: "Sheikh Sadi",
    roomNumber: '3233',
  },
  {
    subjectName: "Chemistry",
    subjectCode: "6645dfd4",
    teacherName: "Ovi Sheikh",
    day: "Monday",
    startTime: "Sat Sep 17 2022 02:30:00 GMT+0600 (Bangladesh Standard Time)",
    endTime: "Sat Sep 17 2022 02:30:00 GMT+0600 (Bangladesh Standard Time)",
    roomNumber: '3233',
  },
  {
    subjectName: "Biology",
    subjectCode: "6645dfd4",
    teacherName: "Akash Hossain",
    day: "Tuesday",
    startTime: "Sat Sep 17 2022 03:00:00 GMT+0600 (Bangladesh Standard Time)",
    endTime: "Sat Sep 17 2022 03:45:00 GMT+0600 (Bangladesh Standard Time)",
    roomNumber: '3233',
  },
  {
    subjectName: "Biology",
    subjectCode: "6645dfd4",
    teacherName: "Akash Hossain",
    day: "Tuesday",
    startTime: "Sat Sep 17 2022 03:00:00 GMT+0600 (Bangladesh Standard Time)",
    endTime: "Sat Sep 17 2022 03:45:00 GMT+0600 (Bangladesh Standard Time)",
    roomNumber: '3233',
  },
  {
    subjectName: "Biology",
    subjectCode: "6645dfd4",
    teacherName: "Akash Hossain",
    day: "Tuesday",
    startTime: "Sat Sep 17 2022 03:00:00 GMT+0600 (Bangladesh Standard Time)",
    endTime: "Sat Sep 17 2022 03:45:00 GMT+0600 (Bangladesh Standard Time)",
    roomNumber: '3233',
  },
  {
    subjectName: "Biology",
    subjectCode: "6645dfd4",
    teacherName: "Akash Hossain",
    day: "Tuesday",
    startTime: "Sat Sep 17 2022 03:00:00 GMT+0600 (Bangladesh Standard Time)",
    endTime: "Sat Sep 17 2022 03:45:00 GMT+0600 (Bangladesh Standard Time)",
    roomNumber: '3233',
  },
  {
    day: "Sunday",
    endTime: "Sat Sep 17 2022 03:30:00 GMT+0600 (Bangladesh Standard Time)",
    startTime: "Sat Sep 17 2022 02:00:00 GMT+0600 (Bangladesh Standard Time)",
    subjectCode: "6645dfd4",
    subjectName: "Fundamental",
    teacherName: "Naimur Rahman",
    roomNumber: '3233',
  },
  {
    day: "Monday",
    endTime: "Sat Sep 17 2022 02:15:00 GMT+0600 (Bangladesh Standard Time)",
    startTime: "Sat Sep 17 2022 01:30:00 GMT+0600 (Bangladesh Standard Time)",
    subjectCode: "6645dfd4",
    subjectName: "physics",
    teacherName: "Sheikh Sadi",
    roomNumber: '3233',
  },
  {
    subjectName: "Chemistry",
    subjectCode: "6645dfd4",
    teacherName: "Ovi Sheikh",
    day: "Monday",
    startTime: "Sat Sep 17 2022 02:30:00 GMT+0600 (Bangladesh Standard Time)",
    endTime: "Sat Sep 17 2022 02:30:00 GMT+0600 (Bangladesh Standard Time)",
    roomNumber: '3233',
  },
  {
    subjectName: "Biology",
    subjectCode: "6645dfd4",
    teacherName: "Akash Hossain",
    day: "Tuesday",
    startTime: "Sat Sep 17 2022 03:00:00 GMT+0600 (Bangladesh Standard Time)",
    endTime: "Sat Sep 17 2022 03:45:00 GMT+0600 (Bangladesh Standard Time)",
    roomNumber: '3233',
  },
  {
    day: "Sunday",
    endTime: "Sat Sep 17 2022 03:30:00 GMT+0600 (Bangladesh Standard Time)",
    startTime: "Sat Sep 17 2022 02:00:00 GMT+0600 (Bangladesh Standard Time)",
    subjectCode: "6645dfd4",
    subjectName: "Fundamental",
    teacherName: "Naimur Rahman",
    roomNumber: '3233',
  },
  {
    day: "Monday",
    endTime: "Sat Sep 17 2022 02:15:00 GMT+0600 (Bangladesh Standard Time)",
    startTime: "Sat Sep 17 2022 01:30:00 GMT+0600 (Bangladesh Standard Time)",
    subjectCode: "6645dfd4",
    subjectName: "physics",
    teacherName: "Sheikh Sadi",
    roomNumber: '3233',
  },
  {
    subjectName: "Chemistry",
    subjectCode: "6645dfd4",
    teacherName: "Ovi Sheikh",
    day: "Saturday",
    startTime: "Sat Sep 17 2022 02:30:00 GMT+0600 (Bangladesh Standard Time)",
    endTime: "Sat Sep 17 2022 02:30:00 GMT+0600 (Bangladesh Standard Time)",
    roomNumber: '3233',
  },
  {
    subjectName: "Biology tor mai dfd dfd dfd dfdfd dfd ",
    subjectCode: "6645dfd4",
    teacherName: "Akash Hossain",
    day: "Tuesday",
    startTime: "Sat Sep 17 2022 03:00:00 GMT+0600 (Bangladesh Standard Time)",
    endTime: "Sat Sep 17 2022 03:45:00 GMT+0600 (Bangladesh Standard Time)",
    roomNumber: '3233',
  },
  {
    subjectName: "Biology tor mai dfd dfd dfd dfdfd dfd ",
    subjectCode: "6645dfd4",
    teacherName: "Akash Hossain",
    day: "Friday",
    startTime: "Sat Sep 17 2022 03:00:00 GMT+0600 (Bangladesh Standard Time)",
    endTime: "Sat Sep 17 2022 03:45:00 GMT+0600 (Bangladesh Standard Time)",
    roomNumber: '3233',
  },
  {
    day: "Friday",
    endTime: "Sat Sep 17 2022 02:15:00 GMT+0600 (Bangladesh Standard Time)",
    startTime: "Sat Sep 17 2022 01:30:00 GMT+0600 (Bangladesh Standard Time)",
    subjectCode: "6645dfd4",
    subjectName: "physics",
    teacherName: "Sheikh Sadi",
    roomNumber: '3233',
  },
  {
    day: "Wednesday",
    endTime: "Sat Sep 17 2022 02:15:00 GMT+0600 (Bangladesh Standard Time)",
    startTime: "Sat Sep 17 2022 01:30:00 GMT+0600 (Bangladesh Standard Time)",
    subjectCode: "6645dfd4",
    subjectName: "physics",
    teacherName: "Sheikh Sadi",
    roomNumber: '3233',
  },
  {
    day: "Wednesday",
    endTime: "Sat Sep 17 2022 02:15:00 GMT+0600 (Bangladesh Standard Time)",
    startTime: "Sat Sep 17 2022 01:30:00 GMT+0600 (Bangladesh Standard Time)",
    subjectCode: "6645dfd4",
    subjectName: "physics",
    teacherName: "Sheikh Sadi",
    roomNumber: '3233',
  },
  {
    day: "Thursday",
    endTime: "Sat Sep 17 2022 02:15:00 GMT+0600 (Bangladesh Standard Time)",
    startTime: "Sat Sep 17 2022 01:30:00 GMT+0600 (Bangladesh Standard Time)",
    subjectCode: "6645dfd4",
    subjectName: "physics",
    teacherName: "Sheikh Sadi",
    roomNumber: '3233',
  },


]
const Home = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <MainLayout>
      <Grid container>
        <Grid item xs={12} md={8}>
          <HomeClassShow data={data}></HomeClassShow>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container>
            <Grid item md={7}>
              <div className="text-xl hidden md:block ">My notes</div>
            </Grid>
            <Grid item md={5}>
              <div>
                <Button onClick={handleOpen}>Add Note</Button>
                <ModalProvider
                  open={open}
                  onClose={handleClose}
                ></ModalProvider>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Home;
