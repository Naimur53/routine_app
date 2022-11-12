

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SchoolIcon from "@mui/icons-material/School";

import EventSeatIcon from "@mui/icons-material/EventSeat";
import RememberMeIcon from "@mui/icons-material/RememberMe";
import SubjectIcon from "@mui/icons-material/Subject";
import FilterTiltShiftIcon from "@mui/icons-material/FilterTiltShift";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import PhoneIcon from "@mui/icons-material/Phone";
import MainLayout from "../ShareComponents/MainLayout/MainLayout";
import { useSelector } from "react-redux";
import { allData } from "../../ManageState/DataSlice/dataSlice";
import textConversion from "../../utilities/textConversion";
import EditProfileLayout from "./compo/EditProfileLayout/EditProfileLayout";
import UpdateProfileAndCover from "./compo/UpdateProfileAndCover/UpdateProfileAndCover";

const EditeProfile = () => {
  const [bio, setBio] = useState(false);
  const [details, setDetails] = useState(false);
  const { user } = useSelector(allData)

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
  const handleBio = () => {
    {
      bio ? setBio(false) : setBio(true);
    }
  };
  const handleDetails = () => {
    {
      details ? setDetails(false) : setDetails(true);
    }
  };
  const { register, handleSubmit, watch, reset } = useForm();
  const onSubmit = (data) => {

  };
  const semesters = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];
  const shifts = ["None", "1st", "2nd"];
  const sections = ["None", "A", "B", "C", "D"];
  return (
    <>
      <div className="container     bg-white  shadow-lg    transform   duration-200 easy-in-out p-3">
        {/*--------------------- using react hook from ------------------------ */}
        <div className=" ">
          {/*-------------------- profile picture edit --------------- */}
          <EditProfileLayout title="Profile"
            Element={UpdateProfileAndCover}
          >

          </EditProfileLayout>

        </div>

        <div assName="">


        </div>

        <div className="">
          <div className="flex justify-between">
            {/* -------------------edit bio information------------------  */}
            <h1 className="text-xl text-gray-400"> Bio</h1>
            <button onClick={handleBio}>
              <span className="text-blue-500"> Edit</span>
            </button>
          </div>
          <div className="p-4">
            {!bio ? (
              <h2 className="text-gray-800 text-lg font-bold">
                Mehedi Hasan
              </h2>
            ) : (
              <TextField
                {...register("name")}
                defaultValue="Mehedi Hasan"
                id="standard-basic"
                variant="standard"
              />
            )}

            <div className=" ">
              <div className="flex">
                <MarkEmailReadIcon className="text-gray-400 m-2"></MarkEmailReadIcon>

                <p className="text-gray-400 text-sm mt-2 ">
                  mehedihasan23159287@gmail.com
                </p>
              </div>

              <div className="flex">
                <PhoneIcon className="text-gray-400 m-2"></PhoneIcon>

                <p className="text-gray-400 text-sm mt-2 ">017******8</p>
              </div>
            </div>
          </div>
        </div>

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
            <div className="flex">
              <EventSeatIcon className="m-2 text-gray-400 "></EventSeatIcon>
              {!details ? (
                <p className="text-gray-400 text-lg mt-2 "> Semester : 6th</p>
              ) : (
                <FormControl variant="standard" className=" w-44">
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
            <div className="flex">
              <FilterTiltShiftIcon className="m-2 text-gray-400 "></FilterTiltShiftIcon>
              {!details ? (
                <p className=" text-gray-400 text-lg mt-2"> Shift : 1st</p>
              ) : (
                <FormControl variant="standard" className=" w-44">
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
        <div className="ml-2">
          <Button type="submit" className=" ml-3" variant="outlined">
            Update Profile
          </Button>
        </div>

        <hr className="mt-6" />
      </div>
    </>
  );
};

export default EditeProfile;
