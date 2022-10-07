import { Box, Button, Container, Grid, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DashboardTab from "../ShareComponents/DashboardTab/DashboardTab";
import MainLayout from "../ShareComponents/MainLayout/MainLayout";
import ModalProvider from "../ShareComponents/Modal/ModalProvider";
import HomeClassShow from "./smallCompo/HomeClassShow/HomeClassShow";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import NoteIcon from "@mui/icons-material/Note";
import HomeNoteShow from "../MyNote/HomeNoteShow";
import { getRoutineDataFromLocalDb } from "../../utilities/dataValidation";
import { getDataFromLocalDb } from "../../utilities/localDb";
import { NavLink } from "react-router-dom";
// const data = {
//   classes: [
//     {
//       day: "Sunday",
//       endTime: "Sat Sep 17 2022 03:30:00 GMT+0600 (Bangladesh Standard Time)",
//       startTime: "Sat Sep 17 2022 02:00:00 GMT+0600 (Bangladesh Standard Time)",
//       subjectCode: "6645dfd4",
//       subjectName: "Fundamental",
//       teacherName: "Naimur Rahman",
//       roomNumber: '3233',
//     },
//     {
//       day: "Monday",
//       endTime: "Sat Sep 17 2022 02:15:00 GMT+0600 (Bangladesh Standard Time)",
//       startTime: "Sat Sep 17 2022 01:30:00 GMT+0600 (Bangladesh Standard Time)",
//       subjectCode: "6645dfd4",
//       subjectName: "physics",
//       teacherName: "Sheikh Sadi",
//       roomNumber: '3233',
//     },
//     {
//       subjectName: "Chemistry",
//       subjectCode: "6645dfd4",
//       teacherName: "Ovi Sheikh",
//       day: "Monday",
//       startTime: "Sat Sep 17 2022 02:30:00 GMT+0600 (Bangladesh Standard Time)",
//       endTime: "Sat Sep 17 2022 02:30:00 GMT+0600 (Bangladesh Standard Time)",
//       roomNumber: '3233',
//     },
//     {
//       "subjectName": "Biology",
//       "subjectCode": "6645dfd4",
//       "teacherName": "Akash Hossain",
//       "day": "Tuesday",
//       "startTime": "Sat Sep 17 2022 03:00:00 GMT+0600 (Bangladesh Standard Time)",
//       "endTime": "Sat Sep 17 2022 03:45:00 GMT+0600 (Bangladesh Standard Time)",
//       roomNumber: '3233',
//     },
//     {
//       day: "Sunday",
//       endTime: "Sat Sep 17 2022 03:30:00 GMT+0600 (Bangladesh Standard Time)",
//       startTime: "Sat Sep 17 2022 02:00:00 GMT+0600 (Bangladesh Standard Time)",
//       subjectCode: "6645dfd4",
//       subjectName: "Fundamental tor main khai mehedi df ddf dfdf d",
//       teacherName: "Naimur Rahman",
//       roomNumber: '3233',
//     },
//     {
//       day: "Monday",
//       endTime: "Sat Sep 17 2022 02:15:00 GMT+0600 (Bangladesh Standard Time)",
//       startTime: "Sat Sep 17 2022 01:30:00 GMT+0600 (Bangladesh Standard Time)",
//       subjectCode: "6645dfd4",
//       subjectName: "physics",
//       teacherName: "Sheikh Sadi",
//       roomNumber: '3233',
//     },
//     {
//       subjectName: "Chemistry",
//       subjectCode: "6645dfd4",
//       teacherName: "Ovi Sheikh",
//       day: "Monday",
//       startTime: "Sat Sep 17 2022 02:30:00 GMT+0600 (Bangladesh Standard Time)",
//       endTime: "Sat Sep 17 2022 02:30:00 GMT+0600 (Bangladesh Standard Time)",
//       roomNumber: '3233',
//     },
//     {
//       subjectName: "Biology",
//       subjectCode: "6645dfd4",
//       teacherName: "Akash Hossain",
//       day: "Tuesday",
//       startTime: "Sat Sep 17 2022 03:00:00 GMT+0600 (Bangladesh Standard Time)",
//       endTime: "Sat Sep 17 2022 03:45:00 GMT+0600 (Bangladesh Standard Time)",
//       roomNumber: '3233',
//     },
//     {
//       subjectName: "Biology",
//       subjectCode: "6645dfd4",
//       teacherName: "Akash Hossain",
//       day: "Tuesday",
//       startTime: "Sat Sep 17 2022 03:00:00 GMT+0600 (Bangladesh Standard Time)",
//       endTime: "Sat Sep 17 2022 03:45:00 GMT+0600 (Bangladesh Standard Time)",
//       roomNumber: '3233',
//     },
//     {
//       subjectName: "Biology",
//       subjectCode: "6645dfd4",
//       teacherName: "Akash Hossain",
//       day: "Tuesday",
//       startTime: "Sat Sep 17 2022 03:00:00 GMT+0600 (Bangladesh Standard Time)",
//       endTime: "Sat Sep 17 2022 03:45:00 GMT+0600 (Bangladesh Standard Time)",
//       roomNumber: '3233',
//     },
//     {
//       subjectName: "Biology",
//       subjectCode: "6645dfd4",
//       teacherName: "Akash Hossain",
//       day: "Tuesday",
//       startTime: "Sat Sep 17 2022 03:00:00 GMT+0600 (Bangladesh Standard Time)",
//       endTime: "Sat Sep 17 2022 03:45:00 GMT+0600 (Bangladesh Standard Time)",
//       roomNumber: '3233',
//     },
//     {
//       day: "Sunday",
//       endTime: "Sat Sep 17 2022 03:30:00 GMT+0600 (Bangladesh Standard Time)",
//       startTime: "Sat Sep 17 2022 02:00:00 GMT+0600 (Bangladesh Standard Time)",
//       subjectCode: "6645dfd4",
//       subjectName: "Fundamental",
//       teacherName: "Naimur Rahman",
//       roomNumber: '3233',
//     },
//     {
//       day: "Monday",
//       endTime: "Sat Sep 17 2022 02:15:00 GMT+0600 (Bangladesh Standard Time)",
//       startTime: "Sat Sep 17 2022 01:30:00 GMT+0600 (Bangladesh Standard Time)",
//       subjectCode: "6645dfd4",
//       subjectName: "physics",
//       teacherName: "Sheikh Sadi",
//       roomNumber: '3233',
//     },
//     {
//       subjectName: "Chemistry",
//       subjectCode: "6645dfd4",
//       teacherName: "Ovi Sheikh",
//       day: "Monday",
//       startTime: "Sat Sep 17 2022 02:30:00 GMT+0600 (Bangladesh Standard Time)",
//       endTime: "Sat Sep 17 2022 02:30:00 GMT+0600 (Bangladesh Standard Time)",
//       roomNumber: '3233',
//     },
//     {
//       subjectName: "Biology",
//       subjectCode: "6645dfd4",
//       teacherName: "Akash Hossain",
//       day: "Tuesday",
//       startTime: "Sat Sep 17 2022 03:00:00 GMT+0600 (Bangladesh Standard Time)",
//       endTime: "Sat Sep 17 2022 03:45:00 GMT+0600 (Bangladesh Standard Time)",
//       roomNumber: '3233',
//     },
//     {
//       day: "Sunday",
//       endTime: "Sat Sep 17 2022 03:30:00 GMT+0600 (Bangladesh Standard Time)",
//       startTime: "Sat Sep 17 2022 02:00:00 GMT+0600 (Bangladesh Standard Time)",
//       subjectCode: "6645dfd4",
//       subjectName: "Fundamental",
//       teacherName: "Naimur Rahman",
//       roomNumber: '3233',
//     },
//     {
//       day: "Monday",
//       endTime: "Sat Sep 17 2022 02:15:00 GMT+0600 (Bangladesh Standard Time)",
//       startTime: "Sat Sep 17 2022 01:30:00 GMT+0600 (Bangladesh Standard Time)",
//       subjectCode: "6645dfd4",
//       subjectName: "physics",
//       teacherName: "Sheikh Sadi",
//       roomNumber: '3233',
//     },
//     {
//       subjectName: "Chemistry",
//       subjectCode: "6645dfd4",
//       teacherName: "Ovi Sheikh",
//       day: "Saturday",
//       startTime: "Sat Sep 17 2022 02:30:00 GMT+0600 (Bangladesh Standard Time)",
//       endTime: "Sat Sep 17 2022 02:30:00 GMT+0600 (Bangladesh Standard Time)",
//       roomNumber: '3233',
//     },
//     {
//       subjectName: "Biology tor mai dfd dfd dfd dfdfd dfd ",
//       subjectCode: "6645dfd4",
//       teacherName: "Akash Hossain",
//       day: "Tuesday",
//       startTime: "Sat Sep 17 2022 03:00:00 GMT+0600 (Bangladesh Standard Time)",
//       endTime: "Sat Sep 17 2022 03:45:00 GMT+0600 (Bangladesh Standard Time)",
//       roomNumber: '3233',
//     },
//     {
//       subjectName: "Biology tor mai dfd dfd dfd dfdfd dfd ",
//       subjectCode: "6645dfd4",
//       teacherName: "Akash Hossain",
//       day: "Friday",
//       startTime: "Sat Sep 17 2022 03:00:00 GMT+0600 (Bangladesh Standard Time)",
//       endTime: "Sat Sep 17 2022 03:45:00 GMT+0600 (Bangladesh Standard Time)",
//       roomNumber: '3233',
//     },
//     {
//       day: "Friday",
//       endTime: "Sat Sep 17 2022 02:15:00 GMT+0600 (Bangladesh Standard Time)",
//       startTime: "Sat Sep 17 2022 01:30:00 GMT+0600 (Bangladesh Standard Time)",
//       subjectCode: "6645dfd4",
//       subjectName: "physics",
//       teacherName: "Sheikh Sadi",
//       roomNumber: '3233',
//     },
//     {
//       day: "Wednesday",
//       endTime: "Sat Sep 17 2022 02:15:00 GMT+0600 (Bangladesh Standard Time)",
//       startTime: "Sat Sep 17 2022 01:30:00 GMT+0600 (Bangladesh Standard Time)",
//       subjectCode: "6645dfd4",
//       subjectName: "physics",
//       teacherName: "Sheikh Sadi",
//       roomNumber: '3233',
//     },
//     {
//       day: "Wednesday",
//       endTime: "Sat Sep 17 2022 02:15:00 GMT+0600 (Bangladesh Standard Time)",
//       startTime: "Sat Sep 17 2022 01:30:00 GMT+0600 (Bangladesh Standard Time)",
//       subjectCode: "6645dfd4",
//       subjectName: "physics",
//       teacherName: "Sheikh Sadi",
//       roomNumber: '3233',
//     },
//     {
//       day: "Thursday",
//       endTime: "Sat Sep 17 2022 02:15:00 GMT+0600 (Bangladesh Standard Time)",
//       startTime: "Sat Sep 17 2022 01:30:00 GMT+0600 (Bangladesh Standard Time)",
//       subjectCode: "6645dfd4",
//       subjectName: "physics",
//       teacherName: "Sheikh Sadi",
//       roomNumber: '3233',
//     },


//   ]
// }
const Home = () => {
  const [list, setList] = useState(getDataFromLocalDb("lists"));
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState({ classes: [] })
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {

    getRoutineDataFromLocalDb(0).then(res => {
      setData(res.data)
      console.log({ res })
    })
      .catch(err => {
        console.log(err)
      })
  }, [])
  console.log({ main: getDataFromLocalDb("lists") })
  return (
    <MainLayout>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          {
            data?.classes.length ? <HomeClassShow data={data}></HomeClassShow> : <div className="flex justify-center items-center custom_height">

              <span>You don't have any routine <NavLink className='text-dark-purple underline underline-dark-pink' to='/searchRoutine'>Find here</NavLink></span>
            </div>
          }
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="custom_height hidden md:block">
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
                  <ModalProvider open={open} setList={setList} onClose={handleClose} />
                </div>
              </Grid>
            </Grid>
            <Grid container>
              <Grid md={12} xs={12}>
                <HomeNoteShow list={list} />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Home;
