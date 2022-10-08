import { Grid } from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { allData } from "../../ManageState/DataSlice/dataSlice";
import DemoCard from "../SearchRoutine/DemoCard/DemoCard";
import MainLayout from "../ShareComponents/MainLayout/MainLayout";

const MyRoutine = () => {
  const [allRoutine, setAllRoutine] = useState([])
  const [getLoading, setGetLoading] = useState(true);
  const { user, } = useSelector(allData);
  useEffect(() => {
    if (user?._id) {
      axios.get(`http://localhost:5001/routine?userId=${user?._id}`)
        .then(res => {
          setAllRoutine(res.data)
          setGetLoading(false);
        })
    } else {
      alert('user id not found')
    }
  }, [user])
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
  return (
    <MainLayout>
      <div className="text-center">
        <h1 className="text-xl font-bold text-ellipsis text-slate-600">
          My Created Routines
        </h1>
      </div>
      <Grid
        container
        spacing={4}
        sx={{ marginTop: "20px", justifyContent: "center", display: "flex" }}
      >
        {allRoutine.map((single, i) => (
          <Grid item lg={3} md={6} xs={12}>
            <DemoCard item={single} updateAble={true} i={i}></DemoCard>
          </Grid>
        ))}
      </Grid>
    </MainLayout>
  );
};

export default MyRoutine;
