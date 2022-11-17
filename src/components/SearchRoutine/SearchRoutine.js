import { Button, Grid, IconButton, Select, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import { useForm } from "react-hook-form";
import MainLayout from "../ShareComponents/MainLayout/MainLayout";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import DemoCard from "./DemoCard/DemoCard";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useCallback } from "react";
import axios from "axios";
import { useState } from "react";
import SkeletonDemoCard from "../ShareComponents/SkeletonDemoCard/SkeletonDemoCard";
import SearchRoutineNotFound from "../ShareComponents/SearchRoutineNotFound/SearchRoutineNotFound";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
const SearchRoutine = () => {
  const [allRoutine, setAllRoutine] = useState([]);
  const [showRoutine, setShowRoutine] = useState([]);
  const [getLoading, setGetLoading] = useState(true);
  const [pagination, setPagination] = useState({ len: 8, skip: 0 });
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

  const onSubmit = (data) => { };
  const debounce = (cb, delay) => {
    const timeCall = setTimeout(cb, delay);
    const clear = () => {
      clearInterval(timeCall);
    };
    return { clear };
  };

  //use debounce
  let institute = watch("institute") || "";
  let department = watch("department") || "";
  let semester = watch("semester") || "";
  let section = watch("section") || "";

  // filter

  useEffect(() => {
    // const filters = allRoutine.filter(single => {

    //   return single.department.toLowerCase().includes(department.toLowerCase()) && single.section.toLowerCase().includes(section.toLowerCase()) && single.semester.toLowerCase().includes(semester.toLowerCase())
    // })
    setShowRoutine(allRoutine);
  }, [allRoutine, department, section, semester]);

  const textSearchRequest = () => {
    axios
      .get(
        `https://shielded-dusk-65695.herokuapp.com/routine?institute=${institute}&department=${department}&section=${section}&semester=${semester}&len=${8}&skip=${0} `
      )
      .then((res) => {
        setAllRoutine(res.data);
        setPagination({ len: 8, skip: 0 });
        setGetLoading(false);
      })
      .catch((err) => {
        setAllRoutine([]);
        setPagination({ len: 8, skip: 0 });
        setGetLoading(false);
      });
  };

  const fetchData = useCallback(() => {
    setGetLoading(true);
    console.log(institute, institute.match(/^[0-9a-fA-F]{24}$/), "output");

    // institute will work for both id and text name of institute
    if (institute?.length === 24) {
      axios
        .get(
          `https://shielded-dusk-65695.herokuapp.com/routine/findById?id=${institute}`
        )
        .then((res) => {
          setAllRoutine([res.data]);
          setPagination({ len: 8, skip: 0 });
          setGetLoading(false);
        })
        .catch((err) => {
          textSearchRequest();
        });
    } else {
      textSearchRequest();
    }
  }, [institute, department, section, semester]);

  useEffect(() => {
    const { clear } = debounce(fetchData, 300);
    return () => {
      clear();
    };
  }, [institute, department, section, semester, fetchData]);

  //handle pagination
  const handlePre = () => {
    setGetLoading(true);
    axios
      .get(
        `https://shielded-dusk-65695.herokuapp.com/routine?institute=${institute}&department=${department}&section=${section}&semester=${semester}&len=${8}&skip=${pagination.skip - 8
        } `
      )
      .then((res) => {
        setAllRoutine(res.data);
        setPagination({ len: res.data.length, skip: pagination.skip - 8 });
        setGetLoading(false);
      });
  };
  const handleNext = () => {
    setGetLoading(true);
    axios
      .get(
        `https://shielded-dusk-65695.herokuapp.com/routine?institute=${institute}&department=${department}&section=${section}&semester=${semester}&len=${8}&skip=${pagination.skip + pagination.len
        } `
      )
      .then((res) => {
        setAllRoutine(res.data);
        setPagination({
          len: res.data.length,
          skip: pagination.skip + pagination.len,
        });
        setGetLoading(false);
      });
  };
  console.log(pagination);
  const democardContainer = {
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    initial: {
      opacity: 0,
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
  };
  return (
    <MainLayout>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="ml-3 flex justify-center"
      >
        <Grid container spacing={2}>
          <Grid item xs={12} lg={12} md={6}>
            {" "}
            <div className="flex w-full justify-center">
              <div className="flex border  border-gray-300 justify-between pr-4 rounded-lg shadow shadow-light-pink items-center w-full ">
                <input
                  type="text"
                  id="defasult-search"
                  className="block pl-4  rounded-tl-full rounded-bl-full focus:border-0 focus:outline-none bg-transparent   w-full py-3 placeholder:text-medium-purple  text- sm text-black         "
                  placeholder="Institute Name or id"
                  {...register("institute", { required: true })}
                />

                <button
                  onClick={handleSearch}
                  type="button"
                  className="text-dark-purple  font-medium rounded-full text-sm p-1 "
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
          <Grid item xs={6} md={6} lg={3}>
            <FormControl variant="standard" sx={{ width: "100%" }}>
              <InputLabel id="demo-multiple-name-label">Semester</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-named"
                value={watch("semester") || ""}
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
          <Grid item xs={6} md={6} lg={3}>
            <FormControl variant="standard" sx={{ width: "100%" }}>
              <InputLabel id="demo-multiple-name-label">section</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-namesx"
                value={watch("section") || ""}
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
          <Grid item xs={12} md={6} lg={3}>
            <Button
              sx={{ width: "100%", mt: "10px" }}
              variant="contained"
              type="button"
              onClick={() => reset()}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
      <Grid container spacing={4} sx={{ marginTop: "20px" }}>
        {
          getLoading ? [...new Array(8)].map((single, i) => <Grid key={i} item lg={3} md={6} xs={12}>
            <SkeletonDemoCard></SkeletonDemoCard>

          </Grid>) : showRoutine.length ? showRoutine.map((single, i) => (
            <Grid item lg={3} md={6} xs={12}>
              <DemoCard item={single} i={i} updateAble={false}></DemoCard>
            </Grid>
          )) : <Grid item xs={12}>
            <div className="my-10 flex justify-center w-full ">
              <SearchRoutineNotFound></SearchRoutineNotFound>
            </div>
          </Grid>
        }
      </Grid>
      {
        showRoutine.length ? <div className="flex py-5 gap-5">
          <button onClick={handlePre} disabled={getLoading || !pagination.skip} className="pagination_button">
            <WestIcon ></WestIcon>
          </button>
          <button
            onClick={handleNext}
            disabled={getLoading || pagination.len < 8}
            className="pagination_button"
          >
            <EastIcon></EastIcon>
          </button>
        </div> : <></>
      }
    </MainLayout>
  );
};

export default SearchRoutine;
