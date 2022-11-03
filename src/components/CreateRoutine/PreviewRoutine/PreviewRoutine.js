import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import HomeClassShow from "../../Home/smallCompo/HomeClassShow/HomeClassShow";
import PreviewClasses from "./smallCompo/PreviewClasses/PreviewClasses";
const PreviewRoutine = ({ errors, watch, setValue, setMainData, register, mainData, setActiveStep, trigger }) => {
  const { institute, department, semester, section, shift } = mainData;



  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <div className="flex justify-between">
            <div className="flex justify-center w-full">
              <div className="text-center">
                <h1 className="text-2xl">
                  {institute}
                </h1>
                <h3 className="text-xl">
                  {department} department, {semester} semester
                </h3>
                <h4  >
                  {section} section, {shift} shift
                </h4>
              </div>
            </div>
            <div>
              <IconButton variant='primary' onClick={() => setActiveStep(0)}>
                <EditIcon sx={{ color: '#5946ad' }}></EditIcon>
              </IconButton>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} md={12}>
          <PreviewClasses classes={mainData.classes}
            errors={errors}
            watch={watch}
            setValue={setValue}
            setMainData={setMainData}
            register={register}
            mainData={mainData}
            trigger={trigger}
            setActiveStep={setActiveStep}

          ></PreviewClasses>
        </Grid>
      </Grid>
    </>
  );
};

export default PreviewRoutine;
