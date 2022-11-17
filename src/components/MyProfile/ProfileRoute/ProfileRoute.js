import React from "react";
import { Avatar, Button } from "@mui/material";

import { NavLink } from "react-router-dom";

import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

import DetailsInfo from "./../../EditeProfile/compo/DetailsInfo/DetailsInfo";
import { useSelector } from "react-redux";
import { allData } from "../../../ManageState/DataSlice/dataSlice";

const ProfileRoute = ({ data }) => {
  const { user } = useSelector(allData);

  return (
    <div>
      <div className="container    bg-white    duration-200 easy-in-out mt-5">
        <div className="w-full">
          <div className="flex-auto lg:w-full">
            <div
              className="h-32 md:h-[250px] overflow-hidden rounded relative bg-cover bg-center bg-on-repeat"
              style={{ backgroundImage: `url('${data.thumbnail}')` }}
            >
              <div className="hidden md:block absolute top-2 right-2">
                {user.email === data.email ? (
                  <>
                    {" "}
                    <Button
                      variant="contained"
                      sx={{ background: "white", color: "black" }}
                      component={NavLink}
                      to="/editProfile"
                    >
                      Edit Profile{" "}
                    </Button>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="flex justify-center px-5 -mt-16">
              <div className="p-2 bg-gray-200 rounded-full shadow relative">
                <Avatar
                  alt={data.displayName}
                  src={data.photoURL}
                  sx={{ width: 150, height: 150 }}
                />
              </div>
            </div>

            <div className="py-5">
              <div className=" text-center">
                <h2 className="text-gray-800 text-xl font-bold">
                  {data.displayName}
                </h2>

                <div className="flex justify-center">
                  <MarkEmailReadIcon className="text-gray-400 m-2"></MarkEmailReadIcon>
                  <p className="text-gray-400 text-sm mt-2 ">{data.email}</p>
                </div>
                <div className="px-0 md:px-5">
                  <p>{data.bio}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-auto   text-gray-500 text-lg">
            <h1 className="text-2xl   text-bold text-gray-700  mb-2">
              Details
            </h1>

            <div>
              <DetailsInfo data={data}></DetailsInfo>
            </div>
          </div>
        </div>

        <hr className="mt-6" />
      </div>
    </div>
  );
};

export default ProfileRoute;
