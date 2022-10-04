import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Container,
  Grid,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import { useForm } from "react-hook-form";
import MainLayout from "../ShareComponents/MainLayout/MainLayout";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import DemoCard from "./DemoCard/DemoCard";
import { useLocation } from "react-router-dom";
const SearchRoutine = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const handleSearch = () => {
    const value = "default-search".value;
    console.log(value);
    console.log(watch("searchName"));
  };

  const semesters = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];
  const shifts = ["None", "1st", "2nd"];
  const sections = ["None", "A", "B", "C", "D"];
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
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
  ]; // F6F4FF
  return (
    <MainLayout>
      <form className="ml-3 flex justify-center">
        <Grid container spacing={2}>
          <Grid item xs={12} lg={3} md={6}>
            {" "}
            <div className="flex w-full justify-center">
              <div className="relative w-full ">
                <input
                  type="search"
                  id="default-search"
                  className="block p-4  w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500      "
                  placeholder="Search Your Routine..."
                  required
                />

                <button
                  onClick={handleSearch}
                  type="submit"
                  className="text-white absolute  right-2   bottom-2.5 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg- gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-white-500 dark:text-white-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField
              {...register("department", { required: true })}
              id="standard-search"
              label="Department"
              type="name"
              sx={{ width: "100%" }}
              variant="standard"
              color="primary"
            />

            <div>
              <span className="text-red-700">
                {errors.department?.type === "required" &&
                  "*department name is required"}{" "}
              </span>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <FormControl variant="standard" sx={{ width: "100%" }}>
              <InputLabel id="demo-multiple-name-label">Semester</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={watch("semester")}
                {...register("semester", { required: true })}
                MenuProps={MenuProps}
              >
                {semesters.map((semester) => (
                  <MenuItem key={semester} value={semester}>
                    {semester}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <div>
              <span className="text-red-700">
                {errors.semester && <p>*Semester name is required</p>}{" "}
              </span>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <FormControl variant="standard" sx={{ width: "100%" }}>
              <InputLabel id="demo-multiple-name-label">section</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={watch("section")}
                {...register("section", { required: true })}
                MenuProps={MenuProps}
              >
                {sections.map((section) => (
                  <MenuItem key={section} value={section}>
                    {section}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <div>
              <span className="text-red-700">
                {errors.semester && <p>*Semester name is required</p>}{" "}
              </span>
            </div>
          </Grid>
        </Grid>
      </form>
      <Grid
        container
        spacing={4}
        sx={{ marginTop: "20px", justifyContent: "center", display: "flex" }}
      >
        {informations.map((single, i) => (
          <Grid item lg={3} md={6} xs={12}>
            <DemoCard item={single} i={i} updateAble={false}></DemoCard>
          </Grid>
        ))}
      </Grid>
    </MainLayout>
  );
};

export default SearchRoutine;
