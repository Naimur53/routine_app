import { PhotoCamera } from "@mui/icons-material";
import { Button, IconButton, Skeleton, Tooltip } from "@mui/material";
import React, { useState } from "react";

import MainLayout from "../ShareComponents/MainLayout/MainLayout";
import profile from "../../images/profile.png";
import profilebg from "../../images/profilebg.jpg";
import { NavLink } from "react-router-dom";

import SchoolIcon from "@mui/icons-material/School";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import RememberMeIcon from "@mui/icons-material/RememberMe";
import SubjectIcon from "@mui/icons-material/Subject";
import FilterTiltShiftIcon from "@mui/icons-material/FilterTiltShift";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import PhoneIcon from "@mui/icons-material/Phone";
import textConversion from "../../utilities/textConversion";
const MyProfile = () => {
  const [loeadeing, setLoeading] = useState(false);
  const institute = "Brahmnbaria Polytechnic Institute";
  const department = "Computer Secience And Enginnering";
  return (
    <MainLayout>
      <div className="container lg:w-5/6 xl:w-2/7 sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out">
        <div className="lg:flex">
          <div className="flex-auto lg:w-52">
            <div className="h-32 overflow-hidden">
              {loeadeing ? (
                <>
                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width="100%"
                    height={200}
                  />
                </>
              ) : (
                <>
                  <img className="w-full" src={profilebg} alt="" />
                  <AddAPhotoIcon className="bg-red-500"></AddAPhotoIcon>
                </>
              )}
            </div>
            <div className="flex justify-center px-5     -mt-12">
              {loeadeing ? (
                <>
                  <Skeleton variant="circular" width="40%" height={100} />
                </>
              ) : (
                <>
                  <img
                    className="h-32 w-32 bg-gray-200 p-2 rounded-full  "
                    src={profile}
                    alt=""
                  />
                  <IconButton
                    color="secondary"
                    aria-label="upload picture"
                    component="label"
                    className="mt-14 ml-2"
                  >
                    <input hidden accept="image/*" type="file" />
                    <PhotoCamera />
                  </IconButton>
                </>
              )}
            </div>

            <div className="px-5">
              <div className="">
                {loeadeing ? (
                  <>
                    <Skeleton variant="text" />
                  </>
                ) : (
                  <>
                    {" "}
                    <h2 className="text-gray-800 text-xl font-bold">
                      Mehedi Hasan
                    </h2>
                  </>
                )}

                <div className="flex">
                  {loeadeing ? (
                    <>
                      <Skeleton variant="text" width="70%" />
                    </>
                  ) : (
                    <>
                      {" "}
                      <MarkEmailReadIcon className="text-gray-400 m-2"></MarkEmailReadIcon>
                      <p className="text-gray-400 text-sm mt-2 ">
                        mehedihasan23159287@gmail.com
                      </p>
                    </>
                  )}
                </div>
              </div>
              <div className="m-2">
                {loeadeing ? (
                  <>
                    <Skeleton
                      animation="wave"
                      variant="text"
                      width="30%"
                      height={50}
                    />
                  </>
                ) : (
                  <>
                    <Button variant="outlined">
                      <NavLink to="/editBySteper">Edit Profile</NavLink>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex-auto lg:w-96  p-4 pl-6   text-gray-500 text-lg">
            {loeadeing ? (
              <>
                <Skeleton
                  animation="wave"
                  variant="text"
                  width="20%"
                  height={40}
                />
              </>
            ) : (
              <>
                <h1 className="text-2xl   text-bold text-gray-700  mb-2">
                  Details
                </h1>
              </>
            )}

            <div className="flex">
              {loeadeing ? (
                <>
                  <Skeleton animation="wave" variant="text" width="70%" />
                </>
              ) : (
                <>
                  <SchoolIcon className="m-2 text-gray-400 "></SchoolIcon>
                  <Tooltip title={institute}>
                    <p className="text-gray-400 text-lg mt-2 ">
                      Study at {textConversion(institute, 25)}{" "}
                    </p>
                  </Tooltip>
                </>
              )}
            </div>
            <div className="flex">
              {loeadeing ? (
                <>
                  <Skeleton animation="wave" variant="text" width="70%" />
                </>
              ) : (
                <>
                  <SubjectIcon className="m-2 text-gray-400 "></SubjectIcon>
                  <Tooltip title={department}>
                    <p className="text-gray-400 text-lg mt-2 ">
                      Department: {textConversion(department, 25)}
                    </p>
                  </Tooltip>
                </>
              )}
            </div>
            <div className="flex">
              {loeadeing ? (
                <>
                  <Skeleton animation="wave" variant="text" width="70%" />
                </>
              ) : (
                <>
                  <EventSeatIcon className="m-2 text-gray-400 "></EventSeatIcon>

                  <p className="text-gray-400 text-lg mt-2 "> Semester : 6th</p>
                </>
              )}
            </div>
            <div className="flex">
              {loeadeing ? (
                <>
                  <Skeleton animation="wave" variant="text" width="70%" />
                </>
              ) : (
                <>
                  <FilterTiltShiftIcon className="m-2 text-gray-400 "></FilterTiltShiftIcon>

                  <p className=" text-gray-400 text-lg mt-2"> Shift : 1st</p>
                </>
              )}
            </div>
            <div className="flex">
              {loeadeing ? (
                <>
                  <Skeleton animation="wave" variant="text" width="70%" />
                </>
              ) : (
                <>
                  <RememberMeIcon className="m-2 text-gray-400 "></RememberMeIcon>

                  <p className="text-gray-400 text-lg mt-2 "> Id : 5461322</p>
                </>
              )}
            </div>
          </div>
        </div>

        <hr className="mt-6" />
      </div>
    </MainLayout>
  );
};

export default MyProfile;
