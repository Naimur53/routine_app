import { Grid, Skeleton, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { allData } from "../../ManageState/DataSlice/dataSlice";
import DemoCard from "../SearchRoutine/DemoCard/DemoCard";
import MainLayout from "../ShareComponents/MainLayout/MainLayout";

import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/system";

const MyRoutine = () => {
  const [allRoutine, setAllRoutine] = useState([]);
  const [getLoading, setGetLoading] = useState(true);
  const { user } = useSelector(allData);
  useEffect(() => {
    if (user?._id) {
      axios
        .get(`https://shielded-dusk-65695.herokuapp.com/ routine?userId=${user?._id}`)
        .then((res) => {
          setAllRoutine(res.data);
          setGetLoading(false);
        });
    } else {
      alert("user id not found");
    }
  }, [user]);
  const informations = [
    {
      classes: [
        {
          subjectName: "Fundamental",
          subjectCode: "6645dfd4",
          teacherName: "Naimur Rahman",
          day: "Sunday",
          roomNumber: "116",
          startTime:
            "Thu Sep 29 2022 07:00:00 GMT+0600 (Bangladesh Standard Time)",
          endTime:
            "Thu Sep 29 2022 04:00:00 GMT+0600 (Bangladesh Standard Time)",
        },
      ],
      institute: "Brahmanbaria Polytechnic Institute , Brahmanbaria",
      department: "dfdsf",
      semester: "1st",
      shift: "None",
      section: "B",
      id: "45",
    },
    {
      classes: [
        {
          subjectName: "Fundamental",
          subjectCode: "6645dfd4",
          teacherName: "Naimur Rahman",
          day: "Sunday",
          roomNumber: "116",
          startTime:
            "Thu Sep 29 2022 07:00:00 GMT+0600 (Bangladesh Standard Time)",
          endTime:
            "Thu Sep 29 2022 04:00:00 GMT+0600 (Bangladesh Standard Time)",
        },
      ],
      institute: "Brahmanbaria Polytechnic Institute , Brahmanbaria",
      department: "dfdsf",
      semester: "1st",
      shift: "None",
      section: "B",
      id: "78352",
    },
    {
      classes: [
        {
          subjectName: "Fundamental",
          subjectCode: "6645dfd4",
          teacherName: "Naimur Rahman",
          day: "Sunday",
          roomNumber: "116",
          startTime:
            "Thu Sep 29 2022 07:00:00 GMT+0600 (Bangladesh Standard Time)",
          endTime:
            "Thu Sep 29 2022 04:00:00 GMT+0600 (Bangladesh Standard Time)",
        },
      ],
      institute: "Brahmanbaria Polytechnic Institute , Brahmanbaria",
      department: "dfdsf",
      semester: "1st",
      shift: "None",
      section: "B",
      id: "445",
    },
    {
      classes: [
        {
          subjectName: "Fundamental",
          subjectCode: "6645dfd4",
          teacherName: "Naimur Rahman",
          day: "Sunday",
          roomNumber: "116",
          startTime:
            "Thu Sep 29 2022 07:00:00 GMT+0600 (Bangladesh Standard Time)",
          endTime:
            "Thu Sep 29 2022 04:00:00 GMT+0600 (Bangladesh Standard Time)",
        },
      ],
      institute: "Brahmanbaria Polytechnic Institute , Brahmanbaria",
      department: "dfdsf",
      semester: "1st",
      shift: "None",
      section: "B",
      id: "44512",
    },
    {
      classes: [
        {
          subjectName: "Fundamental",
          subjectCode: "6645dfd4",
          teacherName: "Naimur Rahman",
          day: "Sunday",
          roomNumber: "116",
          startTime:
            "Thu Sep 29 2022 07:00:00 GMT+0600 (Bangladesh Standard Time)",
          endTime:
            "Thu Sep 29 2022 04:00:00 GMT+0600 (Bangladesh Standard Time)",
        },
      ],
      institute: "Brahmanbaria Polytechnic Institute , Brahmanbaria",
      department: "dfdsf",
      semester: "1st",
      shift: "None",
      section: "B",
      id: "4843215",
    },
    {
      classes: [
        {
          subjectName: "Fundamental",
          subjectCode: "6645dfd4",
          teacherName: "Naimur Rahman",
          day: "Sunday",
          roomNumber: "116",
          startTime:
            "Thu Sep 29 2022 07:00:00 GMT+0600 (Bangladesh Standard Time)",
          endTime:
            "Thu Sep 29 2022 04:00:00 GMT+0600 (Bangladesh Standard Time)",
        },
      ],
      institute: "Brahmanbaria Polytechnic Institute , Brahmanbaria",
      department: "dfdsf",
      semester: "1st",
      shift: "None",
      section: "B",
      id: "41264",
    },
  ];
  if (!getLoading && !allRoutine?.length) {
    return <MainLayout>
      <div className="custom_height flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <img src="./images/duck-searching.gif" alt="notfound" />
          <h4 className="text-lg font-medium mt-5">You don't have any routine <NavLink className='underline underline-dark-purple  text-dark-purple' to='/createRoutine'>create one?</NavLink> </h4>
        </div>

      </div>
    </MainLayout>
  }
  return (
    <MainLayout>
      <div className="text-center">
        {getLoading ? (
          <>
            <Skeleton
              animation="wave"
              sx={{ mx: "auto" }}
              variant="text"
              width="20%"
              height={40}
            />
          </>
        ) : (
          <>
            <h1 className="text-xl font-bold text-ellipsis text-slate-600">
              My Created Routines
            </h1>
          </>
        )}
      </div>
      <Grid
        container
        spacing={4}
        sx={{
          marginTop: "20px",
          justifyContent: "center",
          display: "flex",
        }}
      >
        {(getLoading ? Array.from(new Array(2)) : allRoutine).map(
          (single, i) => (
            <Grid item lg={3} md={6} xs={12}>
              {single ? (
                <>
                  {" "}
                  <DemoCard item={single} updateAble={true} i={i}></DemoCard>
                </>
              ) : (
                <>
                  {" "}
                  <Skeleton
                    animation="wave"
                    sx={{ mx: "auto" }}
                    variant="text"
                    width="100%"
                    height={250}
                  />
                </>
              )}
            </Grid>
          )
        )}
      </Grid>
    </MainLayout>
  );
};

export default MyRoutine;
