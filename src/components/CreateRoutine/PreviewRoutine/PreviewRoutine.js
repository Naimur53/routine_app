import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import RoutineClassCard from "./../../ShareComponents/RoutineClassCards/RoutineClassCard";

const PreviewRoutine = ({ mainData }) => {
  const { institute, department, semester, section, shift } = mainData;

  const boxStyle = {
    display: "block",
    p: 1,
    m: 1,
    bgcolor: (theme) => (theme.palette.mode === "dark" ? "#101010" : "#fff"),
    color: (theme) => (theme.palette.mode === "dark" ? "grey.300" : "grey.800"),
    border: "1px solid",
    borderColor: (theme) =>
      theme.palette.mode === "dark" ? "grey.800" : "grey.300",
    borderRadius: 2,
    fontSize: "0.875rem",
    fontWeight: "700",
  };
  console.log(mainData.classNamees);
  const handleEdite = () => {
    console.log("clicked edit button");
  };
  return (
    <>
      {" "}
      <Typography style={{ textAlign: "center" }} variant="h5" sx={{ ml: 1 }}>
        className
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <Box component="span" sx={boxStyle}>
            Institute: {institute}
          </Box>
          <Box component="span" sx={boxStyle}>
            Department: {department}
          </Box>
          <Box component="span" sx={boxStyle}>
            Semester: {semester}
          </Box>
          <Box component="span" sx={boxStyle}>
            Section: {section}
          </Box>
          <Box component="span" sx={boxStyle}>
            Shift: {shift}
          </Box>
        </Grid>

        <Grid item xs={12} md={7}>
          {mainData.classNamees.map((eachClass, index) => (
            <>
              <Box component="span" sx={boxStyle}>
                <RoutineClassCard
                  classNameCard
                  {...eachClass}
                  i={index}
                ></RoutineClassCard>
              </Box>
            </>
          ))}
          <Button
            key="edit"
            onClick={handleEdite}
            component={NavLink}
            to={"/edite"}
            sx={{ my: 2, color: "Black" }}
          >
            Edite
          </Button>
          <Button>deket</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default PreviewRoutine;
