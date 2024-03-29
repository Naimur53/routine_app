import React, { useEffect } from "react";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";

import MobileStepper from "@mui/material/MobileStepper";

import { useForm } from "react-hook-form";
import Class from "./Class/Class";

import Info from "./info/Info";
import {
  CircularProgress,
  Container,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import PreviewRoutine from "./PreviewRoutine/PreviewRoutine";
import MainLayout from "../ShareComponents/MainLayout/MainLayout";
import axios from "axios";
import { allData } from "../../ManageState/DataSlice/dataSlice";
import { toast } from "react-toastify";
import { useAddRoutineMutation } from "../../ManageState/features/routine/routineApi";
const CreateRoutine = ({ request, requestId, setRequestData }) => {
  const [addRoutine, { isLoading, isError, isSuccess, data: res }] =
    useAddRoutineMutation();

  const { user } = useSelector(allData);
  // const [postLoading, setPostLoading] = useState(false)
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
  };
  // published data to db 633e664ed10c105498fab409
  const publishData = () => {
    if (user?._id) {
      addRoutine({ ...mainData, requestId, creator: user._id });
      // setPostLoading(true)
      // axios.post('https://routine-app-server-main.onrender.com/routine', { ...mainData, requestId, creator: user._id })
      //   .then(res => {
      //     // setPostLoading(false);
      //

      //   })
      //   .catch((err) => {
      //
      //     toast.error("Data is not created try again")
      //     // setPostLoading(false);
      //   });
    } else {
      toast.error("User not found");
    }
  };

  useEffect(() => {
    if (!isLoading && isError) {
      toast.error("Failed to submit try again later!");
    } else if (!isLoading && isSuccess) {
      if (requestId) {
        setRequestData((pre) => {
          const newOne = { ...pre, requestId: res?.data?._id };
          return newOne;
        });
      }
      toast.success("Routine successfully created");
      setActiveStep(0);
      reset();
      setMainData({ classes: [] });
    }
  }, [isLoading, isError, isSuccess, requestId, reset, setRequestData]);

  //----------------
  const handleNext = () => {
    if (activeStep === 0) {
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
      }

      return;
    }
    if (activeStep === 1 && !mainData.classes.length) {
      toast.error("Please add class to go another step");
      return;
    }
    if (activeStep === 2) {
      publishData();
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };
  const steps = [
    {
      label: "Add basic information",
      element: (
        <Info
          setValue={setValue}
          mainData={mainData}
          errors={errors}
          watch={watch}
          register={register}
        ></Info>
      ),
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

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className="h-[calc(100vh-55px)] md:custom_height overflow-y-scroll pt-[30px] md:pt-0  flex flex-col justify-between relative">
          <Box className="pt-0 pb-16 ">
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((ele, i) => (
                <Step key={ele.label}>
                  <StepLabel StepIconProps={{ sx: {} }}>{ele.label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Box className="pt-8">{steps[activeStep].element}</Box>
          </Box>

          <div
            className={
              request
                ? ""
                : "fixed bottom-0 w-full md:w-[calc(100vw-280px)] pr-10 md:pr-8  z-20"
            }
          >
            <MobileStepper
              variant="text"
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              sx={{ mt: 2 }}
              nextButton={
                isLoading ? (
                  <Button size="small" variant="contained" type={"button"}>
                    loading
                  </Button>
                ) : (
                  <Button
                    size="small"
                    variant="contained"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps}
                    type={activeStep === 0 ? "submit" : "button"}
                  >
                    {activeStep === 2 ? "Publish" : "Next"}
                  </Button>
                )
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
          {isLoading ? (
            <div className="absolute inset-0 flex justify-center  items-center backdrop-blur-[2px] ">
              <CircularProgress></CircularProgress>
            </div>
          ) : (
            <></>
          )}
        </Box>
      </form>
    </>
  );
};

export default CreateRoutine;
