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
import { useGetRoutineBySearchingQuery } from "../../ManageState/features/routine/routineApi";
import { sections, semesters } from "../../utilities/formInfo";
import SearchInputs from "./SearchInputs/SearchInputs";

import { motion } from 'framer-motion'
import GrowEffect from "../AnimationCompo/GrowEffect/GrowEffect";
import { mainDuration, pageTranAni, pageTranInit } from "../../utilities/framerMotionAnimationsUtilites";

const SearchRoutine = () => {
  const [pagination, setPagination] = useState({ len: 8, skip: 0 });
  const [debounceTexts, setDebounceTexts] = useState({ institute: '', department: '' })
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const handleSearch = () => {
  };

  //use debounce
  let instituteInputText = watch("institute") || "";
  let inputDepartmentText = watch("department") || "";

  let semester = watch("semester") || "";
  let section = watch("section") || "";

  const { isLoading, isError, isSuccess, data, } = useGetRoutineBySearchingQuery({ institute: debounceTexts.institute, department: debounceTexts.department, section, semester, len: pagination.len, skip: pagination.skip }, {})



  const onSubmit = (data) => { };

  const debounce = (cb, delay) => {
    const timeCall = setTimeout(cb, delay);
    const clear = () => {
      clearInterval(timeCall);
    };
    return { clear };
  };




  // const textSearchRequest = () => {
  //   axios
  //     .get(
  //       `https://routineappserver-production-5617.up.railway.app/routine?institute=${institute}&department=${department}&section=${section}&semester=${semester}&len=${8}&skip=${0} `
  //     )
  //     .then((res) => {
  //       setAllRoutine(res.data);
  //       setPagination({ len: 8, skip: 0 });
  //       setGetLoading(false);
  //     })
  //     .catch((err) => {
  //       setAllRoutine([]);
  //       setPagination({ len: 8, skip: 0 });
  //       setGetLoading(false);
  //     });
  // };

  // const fetchData = useCallback(() => {
  //   setGetLoading(true);
  //   console.log(institute, institute.match(/^[0-9a-fA-F]{24}$/), "output");

  //   // institute will work for both id and text name of institute
  //   if (institute?.length === 24) {
  //     axios
  //       .get(
  //         `https://routineappserver-production-5617.up.railway.app/routine/findById?id=${institute}`
  //       )
  //       .then((res) => {
  //         setAllRoutine([res.data]);
  //         setPagination({ len: 8, skip: 0 });
  //         setGetLoading(false);
  //       })
  //       .catch((err) => {
  //         textSearchRequest();
  //       });
  //   } else {
  //     textSearchRequest();
  //   }
  // }, [institute, department, section, semester]);

  useEffect(() => {
    const { clear } = debounce(() => setDebounceTexts({ institute: instituteInputText, department: inputDepartmentText }), 300);
    return () => {
      clear();
    };
  }, [instituteInputText, inputDepartmentText]);

  //handle pagination
  const handlePre = () => {
    setPagination({ len: 8, skip: data[0]?.skip || 0 });

  };
  const handleNext = () => {

    setPagination({
      len: data?.length,
      skip: pagination.skip + pagination.len,
    })

  };
  console.log(pagination, { data: data });
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
    <GrowEffect

      initPath={pageTranInit}
      aniPath={pageTranAni}
      duration={mainDuration}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="ml-3 flex justify-center"
      >
        <SearchInputs register={register} reset={reset} watch={watch} errors={errors} ></SearchInputs>
      </form>
      <Grid container spacing={4} sx={{ marginTop: "20px" }}>
        {
          isLoading ? [...new Array(8)].map((single, i) => <Grid key={i} item lg={3} md={6} xs={12}>
            <SkeletonDemoCard></SkeletonDemoCard>

          </Grid>) : data.length ? data.map((single, i) => (
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
        data?.length ? <div className="flex py-5 gap-5">
          <button onClick={handlePre} disabled={isLoading || !pagination.skip} className="pagination_button">
            <WestIcon ></WestIcon>
          </button>
          <button
            onClick={handleNext}
            disabled={isLoading || data?.length < 8}
            className="pagination_button"
          >
            <EastIcon></EastIcon>
          </button>
        </div> : <></>
      }
    </GrowEffect>
  );
};

export default SearchRoutine;
