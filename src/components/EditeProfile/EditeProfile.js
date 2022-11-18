

import {
  Button,
  CircularProgress,
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
import UpdateDetails from "./compo/UpdateDetails/UpdateDetails";

const EditeProfile = () => {
  const [bio, setBio] = useState(false);
  const [details, setDetails] = useState(false);
  const { user, loading } = useSelector(allData)

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
  if (loading) {
    return <MainLayout>
      <div className="flex justify-center">
        <CircularProgress></CircularProgress>
      </div>

    </MainLayout>
  }
  return (
    <MainLayout>
      <div className="container     bg-white  shadow-lg    transform   duration-200 easy-in-out p-3">
        {/*--------------------- using react hook from ------------------------ */}
        <div className=" ">
          {/*-------------------- profile picture edit --------------- */}
          <EditProfileLayout title="Profile"
            Element={UpdateProfileAndCover}
          >

          </EditProfileLayout>
        </div>

        <div className=" text-gray-500 text-lg">
          <div  >
            {/*------------------------ edit details information-----------------------  */}
            <EditProfileLayout title="Details"
              Element={UpdateDetails}
            >

            </EditProfileLayout>
          </div>

        </div>

        <hr className="mt-6" />
      </div>
    </MainLayout>
  );
};

export default EditeProfile;
