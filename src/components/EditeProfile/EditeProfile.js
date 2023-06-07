
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
import { useSelector } from "react-redux";
import { allData } from "../../ManageState/DataSlice/dataSlice";
import EditProfileLayout from "./compo/EditProfileLayout/EditProfileLayout";
import UpdateProfileAndCover from "./compo/UpdateProfileAndCover/UpdateProfileAndCover";
import UpdateDetailsSection from "./compo/UpdateDetailsSection/UpdateDetailsSection";

// import UpdateDetails from "./compo/UpdateDetails/updateDetails";

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
  if (loading) {
    return <>
      <div className="flex justify-center">
        <CircularProgress></CircularProgress>
      </div>

    </>
  }
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

        <div className=" text-gray-500 text-lg">
          <div  >
            {/*------------------------ edit details information-----------------------  */}
            <EditProfileLayout title="Details"
              Element={UpdateDetailsSection}
            >

            </EditProfileLayout>
          </div>

        </div>

        <hr className="mt-6" />
      </div>
    </>
  );
};

export default EditeProfile;
