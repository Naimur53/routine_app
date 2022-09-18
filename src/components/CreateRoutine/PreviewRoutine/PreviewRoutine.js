import { Box, Grid, Typography } from "@mui/material";
import React from "react";

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
  console.log(mainData.classes);

  return (
    <>
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
          {mainData.classes.map((eachClass, index) => (
            <>
              <Typography variant="h5" sx={{ ml: 1 }}>
                Class: {index + 1}
              </Typography>
              <Box component="span" sx={boxStyle}>
                Subject Name: {eachClass.subjectName}
              </Box>
              <Box component="span" sx={boxStyle}>
                Subject Code: {eachClass.subjectCode}
              </Box>
              <Box component="span" sx={boxStyle}>
                Start Time: {eachClass.startTime}
              </Box>
              <Box component="span" sx={boxStyle}>
                End Time: {eachClass.endTime}
              </Box>
              <Box component="span" sx={boxStyle}>
                Day: {eachClass.day}
              </Box>
              <Box component="span" sx={boxStyle}>
                Teacher Name: {eachClass.teacherName}
              </Box>
            </>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default PreviewRoutine;
