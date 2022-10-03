import React from "react";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";

import MobileStepper from "@mui/material/MobileStepper";

import { useForm } from "react-hook-form";
import Class from "./Class/Class";

import Info from "./info/Info";
import { Container, Step, StepLabel, Stepper } from "@mui/material";
import { useDispatch } from "react-redux";
import { useState } from "react";
import PreviewRoutine from "./PreviewRoutine/PreviewRoutine";
import MainLayout from "../ShareComponents/MainLayout/MainLayout";
const CreateRoutine = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    trigger,
    formState: { errors },
  } = useForm();
  const [activeStep, setActiveStep] = React.useState(0);
  const [mainData, setMainData] = useState({ classes: [] });

  const onSubmit = ({
    subjectName,
    subjectCode,
    teacherName,
    day,
    startTime,
    endTime,
    roomNumber,
  }) => {
    if (activeStep) {
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
      reset();
    }
    console.log({ mainData });
  };

  //----------------
  const handleNext = () => {
    if (activeStep === 0) {
      console.log(watch());
      if (
        watch("institute")?.length &&
        watch("department")?.length &&
        watch("semester")?.length &&
        watch("shift")?.length &&
        watch("section")?.length
      ) {
        setMainData((before) => {
          return {
            ...before,
            institute: watch("institute"),
            department: watch("department"),
            semester: watch("semester"),
            shift: watch("shift"),
            section: watch("section"),
          };
        });

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      } else {
        onSubmit(<div className=""></div>);
      }
      return;
    }
    if (activeStep === 1 && !mainData.classes.length) {
      return alert("please add class to go another step");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const steps = [
    {
      label: "Add basic information of your institute",
      element: <Info errors={errors} watch={watch} register={register}></Info>,
    },
    {
      label: "Add classes",
      element: (
        <Class
          errors={errors}
          watch={watch}
          reset={reset}
          setValue={setValue}
          register={register}
          trigger={trigger}
          mainData={mainData}
          setMainData={setMainData}
        ></Class>
      ),
    },
    {
      label: "Preview Routine",
      element: (
        <PreviewRoutine
          errors={errors}
          watch={watch}
          setValue={setValue}
          setMainData={setMainData}
          register={register}
          mainData={mainData}
          setActiveStep={setActiveStep}
          trigger={trigger}
        ></PreviewRoutine>
      ),
    },
  ];

  const maxSteps = steps.length;
  //------------

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  console.log({ errors });
  return (
    <MainLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className="md:custom_height flex flex-col justify-between ">
          <Box className="pt-1 ">
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((ele, i) => (
                <Step key={ele.label}>
                  <StepLabel StepIconProps={{ sx: {} }}>{ele.label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Box className="pt-10">{steps[activeStep].element}</Box>
          </Box>

          <div className="fixed bottom-0 w-full md:w-[calc(100vw-380px)]  ">
            <MobileStepper
              variant="text"
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              sx={{ mt: 2 }}
              nextButton={
                <Button
                  size="small"
                  variant="contained"
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
                  variant="contained"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  Back
                </Button>
              }
            ></MobileStepper>
          </div>
        </Box>
        <h2>reqouesnt</h2>
      </form>
    </MainLayout>
  );
};

export default CreateRoutine;
