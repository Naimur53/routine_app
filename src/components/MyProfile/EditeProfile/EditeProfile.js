import MainLayout from "../../ShareComponents/MainLayout/MainLayout";

import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SchoolIcon from "@mui/icons-material/School";

import EventSeatIcon from "@mui/icons-material/EventSeat";
import RememberMeIcon from "@mui/icons-material/RememberMe";
import SubjectIcon from "@mui/icons-material/Subject";
import FilterTiltShiftIcon from "@mui/icons-material/FilterTiltShift";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import PhoneIcon from "@mui/icons-material/Phone";
import profile from "../../../images/profile.png";
import profilebg from "../../../images/profilebg.jpg";

const EditeProfile = () => {
  const [click, setClick] = useState(false);
  console.log(click);
  const handleClick = () => {
    {
      click ? setClick(false) : setClick(true);
    }
  };
  const { register, handleSubmit, watch, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <MainLayout>
      <div className="container lg:w-5/6 xl:w-2/7 sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out p-3">
        <h1 className="text-xl font-bold text-gray-500 text-center">
          Edit Profile{" "}
        </h1>
        <hr className="text-gary-300 m-2" />
        {/*--------------------- using react hook from ------------------------ */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" ">
            <div className="flex justify-between  overflow-hidden ">
              {/*-------------------- profile picture edit --------------- */}
              <h1 className="text-xl text-gray-400">Profile Picture</h1>
              <Button className="text-blue-500" component="label">
                Edit
                <input
                  {...register("profile")}
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                />
              </Button>
            </div>
            <img
              className="mx-auto  w-32 bg-gray-200 p-2 rounded-full"
              src={profile}
              alt=""
            />
          </div>

          <div cl assName="">
            <div className="flex justify-between ">
              {/* ----------------------cover photo edit ------------------ */}
              <h1 className="text-xl text-gray-400"> Cover Photo</h1>

              <Button className="text-blue-500" component="label">
                Edit
                <input
                  {...register("profileBg")}
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                />
              </Button>
            </div>
            <img
              className="h-32 w-50 mx-auto rounded-lg  overflow-hidden  "
              src={profilebg}
              alt=""
            />
          </div>

          <div className="">
            <div className="flex justify-between">
              {/* -------------------edit bio information------------------  */}
              <h1 className="text-xl text-gray-400"> Bio</h1>
              <button onClick={handleClick}>
                <span className="text-blue-500"> Edit</span>
              </button>
            </div>
            <div className="p-4">
              {!click ? (
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
                  {!click ? (
                    <p className="text-gray-400 text-sm mt-2 ">
                      mehedihasan23159287@gmail.com
                    </p>
                  ) : (
                    <TextField
                      {...register("email")}
                      defaultValue="mehedihasan23159287@gmail.com"
                      id="standard-basic"
                      variant="standard"
                    />
                  )}
                </div>

                <div className="flex">
                  <PhoneIcon className="text-gray-400 m-2"></PhoneIcon>
                  {!click ? (
                    <p className="text-gray-400 text-sm mt-2 ">017******8</p>
                  ) : (
                    <TextField
                      {...register("phone")}
                      defaultValue=" 017******8"
                      id="standard-basic"
                      variant="standard"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="      text-gray-500 text-lg">
            <div className="flex justify-between  overflow-hidden ">
              {/*------------------------ edit details information-----------------------  */}
              <h1 className="text-xl text-gray-400"> Details</h1>

              <button onClick={handleClick}>
                <span className="text-blue-500"> Edit</span>
              </button>
            </div>
            <div className="p-4">
              <div className="flex">
                <SchoolIcon className="m-2 text-gray-400 "></SchoolIcon>
                {!click ? (
                  <p className="text-gray-400 text-lg mt-2 "> Study at BBPI</p>
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
                {!click ? (
                  <p className="text-gray-400 text-lg mt-2 ">
                    Department : Computer
                  </p>
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
                {!click ? (
                  <p className="text-gray-400 text-lg mt-2 "> Semester : 6th</p>
                ) : (
                  <TextField
                    id="standard-basic"
                    defaultValue={"6th"}
                    {...register("semester")}
                    variant="standard"
                  />
                )}
              </div>
              <div className="flex">
                <FilterTiltShiftIcon className="m-2 text-gray-400 "></FilterTiltShiftIcon>
                {!click ? (
                  <p className=" text-gray-400 text-lg mt-2"> Shift : 1st</p>
                ) : (
                  <TextField
                    id="standard-basic"
                    defaultValue={"1st"}
                    {...register("shift")}
                    variant="standard"
                  />
                )}
              </div>
              <div className="flex">
                <RememberMeIcon className="m-2 text-gray-400 "></RememberMeIcon>
                {!click ? (
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
        </form>

        <hr className="mt-6" />
      </div>
    </MainLayout>
  );
};

export default EditeProfile;
