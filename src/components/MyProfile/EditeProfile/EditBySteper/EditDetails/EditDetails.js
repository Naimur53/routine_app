import React from "react";
import MainLayout from "../../../../ShareComponents/MainLayout/MainLayout";

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SchoolIcon from "@mui/icons-material/School";

import EventSeatIcon from "@mui/icons-material/EventSeat";
import RememberMeIcon from "@mui/icons-material/RememberMe";
import SubjectIcon from "@mui/icons-material/Subject";
import FilterTiltShiftIcon from "@mui/icons-material/FilterTiltShift";

import textConversion from "../../../../../utilities/textConversion";
const EditDetails = () => {
  const [bio, setBio] = useState(false);
  const [details, setDetails] = useState(false);
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
  const institute = "Brahmnbaria Polytechnic Institute";
  const department = "Computer Secience And Enginnering";

  const handleDetails = () => {
    {
      details ? setDetails(false) : setDetails(true);
    }
  };
  const { register, handleSubmit, watch, reset } = useForm();
  const onSubmit = (data) => {};
  const semesters = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];
  const shifts = ["None", "1st", "2nd"];
  const sections = ["None", "A", "B", "C", "D"];
  return (
    <MainLayout>
      <div className="lg:w-[70%] bg-gray-50 rounded-md border p-2 mx-auto">
        <div className="      text-gray-500 text-lg">
          <div className="flex justify-between  overflow-hidden ">
            {/*------------------------ edit details information-----------------------  */}
            <h1 className="text-xl text-gray-400"> Details</h1>

            <button onClick={handleDetails}>
              <span className="text-blue-500"> Edit</span>
            </button>
          </div>
          <div className="p-4">
            <div className="flex">
              <SchoolIcon className="m-2 text-gray-400 "></SchoolIcon>
              {!details ? (
                <Tooltip title={department}>
                  <p className="text-gray-400 text-lg mt-2 ">
                    Study at{textConversion(institute, 25)}
                  </p>
                </Tooltip>
              ) : (
                <TextField
                  id="standard-basic"
                  {...register("institute")}
                  defaultValue=" Study at BBPI"
                  variant="standard"
                />
              )}
            </div>
            <div className="flex">
              <SubjectIcon className="m-2 text-gray-400 "></SubjectIcon>
              {!details ? (
                <Tooltip title={department}>
                  <p className="text-gray-400 text-lg mt-2 ">
                    Department: {textConversion(department, 25)}{" "}
                  </p>
                </Tooltip>
              ) : (
                <TextField
                  id="standard-basic"
                  {...register("department")}
                  defaultValue="Computer"
                  variant="standard"
                />
              )}
            </div>
            <div className="flex alignItems-center">
              <EventSeatIcon className="m-2 text-gray-400 "></EventSeatIcon>
              {!details ? (
                <p className="text-gray-400 text-lg mt-2 "> Semester : 6th</p>
              ) : (
                <FormControl variant="standard" className=" w-[180px] ">
                  <InputLabel id="demo-multiple-name-label">
                    Semester
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={watch("semester")}
                    {...register("semester", { required: false })}
                    MenuProps={MenuProps}
                  >
                    {semesters.map((semester) => (
                      <MenuItem key={semester} value={semester}>
                        {semester}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            </div>
            <div className="flex items-center">
              <FilterTiltShiftIcon className="m-2 text-gray-400 "></FilterTiltShiftIcon>
              {!details ? (
                <p className=" text-gray-400 text-lg mt-2"> Shift : 1st</p>
              ) : (
                <FormControl variant="standard" className=" w-[180px] mb-4 ">
                  <InputLabel id="demo-multiple-name-label">Shift</InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={watch("shift")}
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
              )}
            </div>
            <div className="flex">
              <RememberMeIcon className="m-2 text-gray-400 "></RememberMeIcon>
              {!details ? (
                <p className="text-gray-400 text-lg mt-2 "> Id : 5461322</p>
              ) : (
                <TextField
                  id="standard-basic"
                  defaultValue={"5461322"}
                  {...register("id")}
                  variant="standard"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default EditDetails;
