import React from "react";
import Box from "@mui/material/Box";
 
 
 
 
import Button from '@mui/material/Button';
 
import MobileStepper from "@mui/material/MobileStepper";
 
 
import { useForm } from "react-hook-form";
import Class from "./Class/Class";

import Info from "./info/Info";
import { Container, Step, StepLabel, Stepper } from "@mui/material";
import { useDispatch } from 'react-redux'
import { useState } from "react";
const CreateRoutine = () => {
  const { register, handleSubmit, watch, setValue, reset, formState: { errors }, } = useForm();
  const [activeStep, setActiveStep] = React.useState(0);
  const [mainData, setMainData] = useState({ classes: [] })

  const onSubmit = ({ subjectName, subjectCode, teacherName, day, startTime, endTime }) => {
    if (activeStep) {
      console.log(typeof new Date(startTime).toString(),);
      const data = {
        subjectName, subjectCode, teacherName, day, startTime: new Date(startTime).toString(), endTime: new Date(endTime).toString()
      }
      setMainData(before => {

        return {
          ...before, classes: [...before.classes, data,]
        }
      }
      )
      reset();

    }
    console.log({ mainData });
  };

  const steps = [
    {
      label: 'Add basic information of your institute',
      element: <Info errors={errors} watch={watch} register={register}></Info>,
    },
    {
      label: "Add classes",
      element: <Class errors={errors} watch={watch} setValue={setValue} register={register} mainData={mainData}></Class>,
    },
    {
      label: "Preview Routine",
      element: <div errors={errors} watch={watch} setValue={setValue} register={register}>Tor main khai </div>,
    },
  ];

  const maxSteps = steps.length;
//------------
 
  //----------------
  const handleNext = () => {
    if (activeStep === 0) {
      console.log(watch());
      if (
        watch('institute')?.length &&
        watch('department')?.length &&
        watch('semester')?.length &&
        watch('shift')?.length &&
        watch('section')?.length
      ) {
        setMainData(before => {
          return {
            ...before,
            institute: watch('institute'),
            department: watch('department'),
            semester: watch('semester'),
            shift: watch('shift'),
            section: watch('section'),

          }
        })
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      } else {
        onSubmit(<div className=""></div>);
      }
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>

        <Box className="h-screen flex flex-col justify-between ">

          <Box className="pt-1 md:pt-10">
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((ele) => (
                <Step key={ele.label}>
                  <StepLabel>{ele.label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Box className="pt-10">
              {steps[activeStep].element}
            </Box>
          </Box>
          <MobileStepper
            variant="text"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            sx={{ mt: 2 }}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
                type={activeStep === 0 ? "submit" : "button"}
              >
                Next
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                Back
              </Button>
            }
          />
        </Box>
      </form>
    </Container>
  );
};

export default CreateRoutine;
