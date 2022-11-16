import { Button, Grid, Select, TextField } from "@mui/material";
import React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { NavLink } from "react-router-dom";

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

const semesters = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];
const shifts = ["None", "1st", "2nd"];
const sections = ["None", "A", "B", "C", "D"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const Info = ({ errors, register, watch, disabled }) => {
  return (
    <div>
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
            sx={{ width: "100%" }}
            color="primary"
            disabled={disabled}
          />
          <div>
            <span className="text-red-700">
              {errors.institute?.type === "required" &&
                "*institute name is required"}{" "}
            </span>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            {...register("department", { required: true })}
            id="standard-search"
            label="Department"
            type="name"
            variant="standard"
            color="primary"
            sx={{ width: "100%" }}
            disabled={disabled}

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
              value={watch("semester") ?? ''}
              {...register("semester", { required: true })}
              MenuProps={MenuProps}
              disabled={disabled}

              defaultValue={''}
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
              defaultValue={''}
              id="demo-multiple-name"
              value={watch("shift") ?? ""}
              {...register("shift", { required: true })}
              MenuProps={MenuProps}
              disabled={disabled}

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
              value={watch("section") ?? ""}
              {...register("section", { required: true })}
              MenuProps={MenuProps}
              defaultValue={''}
              disabled={disabled}


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
    </div>
  );
};

export default Info;
