import { PhotoCamera } from "@mui/icons-material";
import { Avatar, Button, IconButton, Skeleton, Tooltip } from "@mui/material";
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
import { useSelector } from "react-redux";
import { allData } from "../../ManageState/DataSlice/dataSlice";
import EditIcon from '@mui/icons-material/Edit';
const MyProfile = () => {
  const [loeadeing, setLoeading] = useState(false);
  const { user, } = useSelector(allData);
  const institute = "Brahmnbaria Polytechnic Institute";
  const department = "Computer Secience And Enginnering";
  return (
    <MainLayout>
      <div className="container    bg-white    duration-200 easy-in-out mt-5">
        <div className="w-full">
          <div className="flex-auto lg:w-full">
            <div className="h-32 md:h-[250px] overflow-hidden rounded relative bg-cover bg-center bg-on-repeat" style={{ backgroundImage: `url('${user.thumbnail}')`, }}>
              <div className="absolute top-2 right-2">
                <Button variant="contained" sx={{ background: 'white', color: 'black' }} component={NavLink} to='/editProfile' >  Edit Profile </Button>

              </div>
            </div>
            <div className="flex justify-center px-5 -mt-16">


              {/* <img
                className="h-32 relative z-10 md:h-[150px] w-32 md:w-[150px] bg-gray-200 p-2 rounded-full  "
                src={user.photoURL}
                alt="user"
              /> */}
              <div className="p-2 bg-gray-200 rounded-full shadow relative">

                <Avatar
                  alt={user.displayName}
                  src={user.photoURL}
                  sx={{ width: 150, height: 150 }}
                />
              </div>
            </div>

            <div className="py-5">
              <div className=" text-center">

                <h2 className="text-gray-800 text-xl font-bold">
                  {
                    user.displayName
                  }
                </h2>

                <div className="flex justify-center">
                  <MarkEmailReadIcon className="text-gray-400 m-2"></MarkEmailReadIcon>
                  <p className="text-gray-400 text-sm mt-2 ">
                    {user.email}
                  </p>
                </div>
                <div className="px-0 md:px-5">
                  <p>{user.bio}</p>
                </div>
              </div>

            </div>
          </div>

          <div className="flex-auto   text-gray-500 text-lg">

            <h1 className="text-2xl   text-bold text-gray-700  mb-2">
              Details
            </h1>

            <div className="flex">
              <SchoolIcon className="m-2 text-gray-400 "></SchoolIcon>
              <Tooltip title={institute}>
                <p className="text-gray-400 text-lg mt-2 ">
                  Study at {textConversion(institute, 100)}{" "}
                </p>
              </Tooltip>

            </div>
            <div className="flex">

              <SubjectIcon className="m-2 text-gray-400 "></SubjectIcon>
              <Tooltip title={department}>
                <p className="text-gray-400 text-lg mt-2 ">
                  Department: {textConversion(department, 100)}
                </p>
              </Tooltip>

            </div>
            <div className="flex">

              <EventSeatIcon className="m-2 text-gray-400 "></EventSeatIcon>

              <p className="text-gray-400 text-lg mt-2 "> Semester : 6th</p>


            </div>
            <div className="flex">
              <FilterTiltShiftIcon className="m-2 text-gray-400 "></FilterTiltShiftIcon>

              <p className=" text-gray-400 text-lg mt-2"> Shift : 1st</p>

            </div>
            <div className="flex">

              <RememberMeIcon className="m-2 text-gray-400 "></RememberMeIcon>

              <p className="text-gray-400 text-lg mt-2 "> section : 5461322</p>

            </div>
          </div>
        </div>

        <hr className="mt-6" />
      </div>
    </MainLayout>
  );
};

export default MyProfile;
