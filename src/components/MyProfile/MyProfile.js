
import { Avatar, Button, } from "@mui/material";
import React from "react";

import MainLayout from "../ShareComponents/MainLayout/MainLayout";
import { NavLink } from "react-router-dom";

import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { useSelector } from "react-redux";
import { allData } from "../../ManageState/DataSlice/dataSlice";
import DetailsInfo from "../EditeProfile/compo/DetailsInfo/DetailsInfo";
const MyProfile = () => {
  const { user, } = useSelector(allData);
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

            <div>
              <DetailsInfo></DetailsInfo>
            </div>
          </div>
        </div>

        <hr className="mt-6" />
      </div>
    </MainLayout>
  );
};

export default MyProfile;
