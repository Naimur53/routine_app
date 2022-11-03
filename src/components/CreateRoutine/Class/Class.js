import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import MuiDateTimePicker from "./MuiDateTimePicker";
import { useState } from "react";

const Class = ({
  mainData,
  trigger,
  register,
  errors,
  watch,
  setValue,
  reset,
  setMainData,
}) => {
  const [defaultValue, setDefaultValue] = useState({
    subjectCode: "",
    subjectName: "",
    teacherName: "",
  });

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

  const names = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  const addSameClass = async () => {
    const check = await trigger(undefined, { shouldFocus: true });
    if (check) {
      const {
        subjectName,
        subjectCode,
        teacherName,
        day,
        startTime,
        endTime,
        roomNumber,
      } = watch();
      const data = {
        subjectName,
        subjectCode,
        teacherName,
        day,
        roomNumber,
        startTime: new Date(startTime).toString(),
        endTime: new Date(endTime).toString(),
      };
      setMainData((before) => {
        return {
          ...before,
          classes: [...before.classes, data],
        };
      });
      setValue("day", "");
      setValue("startTime", null);
      setValue("endTime", null);
    }
  };


  return (
    <div>
      {/* register your input into the hook by invoking the "register" function */}

      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <TextField
            {...register("subjectName", {
              required: true,
            })}
            id="standard-search"
            label="Subject Name"
            type="name"
            variant="standard"
            sx={{ width: "100%" }}
            color="primary"
          />
          <div>
            <span classNameNameName="text-red-700">
              {errors.subjectName?.type === "required" &&
                "*subjectName name is required"}{" "}
            </span>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            {...register("subjectCode", { required: true })}
            label="Subject Code"
            type="text"
            variant="standard"
            color="primary"
            sx={{ width: "100%" }}
          />

          <div>
            <span className="text-red-700">
              {errors.subjectCode?.type === "required" &&
                "*subjectCode name is required"}{" "}
            </span>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            {...register("teacherName", { required: true })}
            label="Teacher Name"
            type="name"
            variant="standard"
            color="primary"
            sx={{ width: "100%" }}
          />

          <div>
            <span className="text-red-700">
              {errors.teacherName && <p>*Teacher name is required</p>}{" "}
            </span>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            {...register("roomNumber", { required: true })}
            label="Room Number"
            type="name"
            variant="standard"
            color="primary"
            sx={{ width: "100%" }}
          />

          <div>
            <span className="text-red-700">
              {errors.roomNumber && <p>*Room Number is required</p>}{" "}
            </span>
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel id="demo-simple-select-filled-label">
              Select day
            </InputLabel>
            <Select
              labelId="demo-multiple-name-labels"
              id="demo-multiple-name"
              sx={{ p: 0 }}
              label="Select Day"
              color="primary"
              {...register("day", {
                required: true,
              })}
              value={watch("day") || ""}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div>
            <span className="text-red-700">
              {errors.day && <p>*day is required</p>}{" "}
            </span>
          </div>
        </Grid>
        <Grid item xs={6} md={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MuiDateTimePicker
              register={register}
              errors={errors}
              label="Start Time"
              watch={watch}
              setValue={setValue}
              name="startTime"
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={6} md={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MuiDateTimePicker
              label="End Time"
              register={register}
              errors={errors}
              watch={watch}
              setValue={setValue}
              name="endTime"
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} md={12}>
          <h2 className="  mb-3">
            {" "}
            Total added class {mainData.classes?.length}
          </h2>
          <div className="flex gap-4 md:flex-row flex-col">
            <Button type="submit" variant="outlined">
              Add another class
            </Button>
            <Button type="button" onClick={addSameClass} variant="outlined">
              Add another day on same class
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Class;
