import { CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { allData } from "../../ManageState/DataSlice/dataSlice";
import MainLayout from "./../ShareComponents/MainLayout/MainLayout";
import { Button, Grid, Select, TextField } from "@mui/material";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import UserUpdateExitsRoutine from "./SmallCompo/UserUpdateExitsRoutine";
import AddMoreClass from "./SmallCompo/AddMoreClass";
import { toast } from "react-toastify";
import { sections, semesters, shifts } from "../../utilities/formInfo";
import {
  useEditRoutineMutation,
  useGetRoutineWithIdQuery,
} from "../../ManageState/features/routine/routineApi";

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

const UpdateRoutine = ({ admin }) => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const { user } = useSelector(allData);
  const {
    isLoading,
    isError,
    isSuccess,
    data: fetchedData,
  } = useGetRoutineWithIdQuery(id);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    trigger,
    formState: { errors },
  } = useForm();

  const [
    editRoutine,
    {
      isLoading: isEditLoading,
      isError: isEditRoutineError,
      isSuccess: isEditRoutineSuccess,
    },
  ] = useEditRoutineMutation();
  //working
  useEffect(() => {
    if (admin) {
      setData(fetchedData);
    } else if (user?._id) {
      // axios.get(`https://routine-app-server-main.onrender.com/routine?id=${id}&userId=${user._id}`)
      //  fetchedData.creator
      if (user._id === fetchedData?.creator?._id) {
        setData(fetchedData);
      }
    }
  }, [id, admin, user, fetchedData]);

  useEffect(() => {
    if (!isEditLoading && isEditRoutineError) {
      toast.error("Failed to update");
    }
    if (!isEditLoading && isEditRoutineSuccess) {
      toast.success("Successfully update");
    }
  }, [isEditLoading, isEditRoutineError, isEditRoutineSuccess]);

  if (!isLoading && (!data?._id || isError)) {
    return (
      <>
        <div className="custom_height flex justify-center items-center">
          <h2 className="text-center text-xl text-red-600">
            You don't have access to update!
          </h2>
        </div>
      </>
    );
  }
  if (isLoading) {
    return (
      <div className="flex justify-center">
        <CircularProgress></CircularProgress>
      </div>
    );
  }

  // handle basic from submit
  const onSubmit = (fromData) => {
    const mainData = { ...fromData, classes: data.classes };

    editRoutine({ mainData, userId: user?._id, _id: data._id });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="pb-2 flex justify-end">
            {isEditLoading ? (
              <CircularProgress />
            ) : (
              <Button variant="outlined" type="submit">
                Update
              </Button>
            )}
          </div>
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <TextField
                {...register("institute", {
                  required: true,
                })}
                id="standard-search"
                label="Institute Name"
                type="name"
                variant="standard"
                defaultValue={data.institute}
                sx={{ width: "100%" }}
                color="primary"
              />
              <div>
                <span className="text-red-700">
                  {errors.institute?.type === "required" &&
                    "*institute name is required"}
                </span>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                {...register("department", { required: true })}
                id="standard-search"
                label="Department"
                type="name"
                defaultValue={data.department}
                variant="standard"
                color="primary"
                sx={{ width: "100%" }}
              />

              <div>
                <span className="text-red-700">
                  {errors.department?.type === "required" &&
                    "*department name is required"}{" "}
                </span>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel id="demo-multiple-name-label">Semester</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={watch("semester") || data.semester || ""}
                  defaultValue={data.semester}
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
            <Grid item xs={12} md={6}>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel id="demo-multiple-name-label">Shift</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={watch("shift") || data.shift || ""}
                  defaultValue={data.shift}
                  {...register("shift", { required: true })}
                  MenuProps={MenuProps}
                >
                  {shifts.map((shift) => (
                    <MenuItem key={shift} value={shift}>
                      {shift}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <div>
                <span className="text-red-700">
                  {errors.shift && <p>*Shift name is required</p>}
                </span>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel id="demo-multiple-name-label">Section</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={watch("section") || data.section || ""}
                  defaultValue={data.section}
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
                  {errors.section && <p>*Section name is required</p>}
                </span>
              </div>
            </Grid>
          </Grid>
        </form>
        <AddMoreClass setData={setData} classes={data.classes}></AddMoreClass>
        <div>
          <UserUpdateExitsRoutine
            data={data}
            setData={setData}
          ></UserUpdateExitsRoutine>
        </div>
      </div>
    </>
  );
};

export default UpdateRoutine;
