import { Grid } from "@mui/material";
import React, { useState } from "react";
import DemoCard from "../SearchRoutine/DemoCard/DemoCard";
import MainLayout from "../ShareComponents/MainLayout/MainLayout";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { getAllRoutinesFromLocalDb } from "../../utilities/dataValidation";
import { deleteOneRoutine } from "../../utilities/localDb";
import RoutineNotFound from "../ShareComponents/RoutineNotFound/RoutineNotFound";

const SaveRoutine = () => {
  const [data, setData] = useState([])
  // const informations = [
  //   {
  //     classes: [
  //       {
  //         subjectName: "Fundamental",
  //         subjectCode: "6645dfd4",
  //         teacherName: "Naimur Rahman",
  //         day: "Sunday",
  //         roomNumber: "116",
  //         startTime:
  //           "Thu Sep 29 2022 07:00:00 GMT+0600 (Bangladesh Standard Time)",
  //         endTime:
  //           "Thu Sep 29 2022 04:00:00 GMT+0600 (Bangladesh Standard Time)",
  //       },
  //     ],
  //     institute: "Brahmanbaria Polytechnic Institute , Brahmanbaria",
  //     department: "dfdsf",
  //     semester: "1st",
  //     shift: "None",
  //     section: "B",
  //     id: "45",
  //   },
  //   {
  //     classes: [
  //       {
  //         subjectName: "Fundamental",
  //         subjectCode: "6645dfd4",
  //         teacherName: "Naimur Rahman",
  //         day: "Sunday",
  //         roomNumber: "116",
  //         startTime:
  //           "Thu Sep 29 2022 07:00:00 GMT+0600 (Bangladesh Standard Time)",
  //         endTime:
  //           "Thu Sep 29 2022 04:00:00 GMT+0600 (Bangladesh Standard Time)",
  //       },
  //     ],
  //     institute: "Brahmanbaria Polytechnic Institute , Brahmanbaria",
  //     department: "dfdsf",
  //     semester: "1st",
  //     shift: "None",
  //     section: "B",
  //     id: "78352",
  //   },
  //   {
  //     classes: [
  //       {
  //         subjectName: "Fundamental",
  //         subjectCode: "6645dfd4",
  //         teacherName: "Naimur Rahman",
  //         day: "Sunday",
  //         roomNumber: "116",
  //         startTime:
  //           "Thu Sep 29 2022 07:00:00 GMT+0600 (Bangladesh Standard Time)",
  //         endTime:
  //           "Thu Sep 29 2022 04:00:00 GMT+0600 (Bangladesh Standard Time)",
  //       },
  //     ],
  //     institute: "Brahmanbaria Polytechnic Institute , Brahmanbaria",
  //     department: "dfdsf",
  //     semester: "1st",
  //     shift: "None",
  //     section: "B",
  //     id: "445",
  //   },
  //   {
  //     classes: [
  //       {
  //         subjectName: "Fundamental",
  //         subjectCode: "6645dfd4",
  //         teacherName: "Naimur Rahman",
  //         day: "Sunday",
  //         roomNumber: "116",
  //         startTime:
  //           "Thu Sep 29 2022 07:00:00 GMT+0600 (Bangladesh Standard Time)",
  //         endTime:
  //           "Thu Sep 29 2022 04:00:00 GMT+0600 (Bangladesh Standard Time)",
  //       },
  //     ],
  //     institute: "Brahmanbaria Polytechnic Institute , Brahmanbaria",
  //     department: "dfdsf",
  //     semester: "1st",
  //     shift: "None",
  //     section: "B",
  //     id: "44512",
  //   },
  //   {
  //     classes: [
  //       {
  //         subjectName: "Fundamental",
  //         subjectCode: "6645dfd4",
  //         teacherName: "Naimur Rahman",
  //         day: "Sunday",
  //         roomNumber: "116",
  //         startTime:
  //           "Thu Sep 29 2022 07:00:00 GMT+0600 (Bangladesh Standard Time)",
  //         endTime:
  //           "Thu Sep 29 2022 04:00:00 GMT+0600 (Bangladesh Standard Time)",
  //       },
  //     ],
  //     institute: "Brahmanbaria Polytechnic Institute , Brahmanbaria",
  //     department: "dfdsf",
  //     semester: "1st",
  //     shift: "None",
  //     section: "B",
  //     id: "4843215",
  //   },
  //   {
  //     classes: [
  //       {
  //         subjectName: "Fundamental",
  //         subjectCode: "6645dfd4",
  //         teacherName: "Naimur Rahman",
  //         day: "Sunday",
  //         roomNumber: "116",
  //         startTime:
  //           "Thu Sep 29 2022 07:00:00 GMT+0600 (Bangladesh Standard Time)",
  //         endTime:
  //           "Thu Sep 29 2022 04:00:00 GMT+0600 (Bangladesh Standard Time)",
  //       },
  //     ],
  //     institute: "Brahmanbaria Polytechnic Institute , Brahmanbaria",
  //     department: "dfdsf",
  //     semester: "1st",
  //     shift: "None",
  //     section: "B",
  //     id: "41264",
  //   },
  // ];
  useEffect(() => {
    getAllRoutinesFromLocalDb()
      .then(res => {
        setData(res)
      })
  }, [])
  const handleDelete = (_id) => {
    deleteOneRoutine(_id)
    setData(data.filter(single => single._id !== _id))
  }
  if (!data?.length) {
    return < >
      <div>
        <RoutineNotFound></RoutineNotFound>
      </div>
    </>
  }
  return (
    < >
      <div className="text-center">
        <h1 className="text-xl font-bold text-ellipsis text-slate-600">
          Your Saved Routines
        </h1>
      </div>
      <Grid
        container
        spacing={4}
        sx={{ marginTop: "20px", justifyContent: "center", display: "flex" }}
      >
        {data.map((single, i) => (
          <Grid key={i} item lg={3} md={6} xs={12}>
            <DemoCard deleteFromLocal={handleDelete} item={{ ...single, }} i={i} deleteAble={true}></DemoCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SaveRoutine;
