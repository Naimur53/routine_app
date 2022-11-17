import { Avatar, Button } from "@mui/material";
import React from "react";

import MainLayout from "../ShareComponents/MainLayout/MainLayout";
import { NavLink } from "react-router-dom";

import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { useSelector } from "react-redux";
import { allData } from "../../ManageState/DataSlice/dataSlice";
import DetailsInfo from "../EditeProfile/compo/DetailsInfo/DetailsInfo";
import ProfileRoute from "./ProfileRoute/ProfileRoute";
const MyProfile = () => {
  const { user } = useSelector(allData);
  return (
    <MainLayout>
      <ProfileRoute data={user}></ProfileRoute>
    </MainLayout>
  );
};

export default MyProfile;
