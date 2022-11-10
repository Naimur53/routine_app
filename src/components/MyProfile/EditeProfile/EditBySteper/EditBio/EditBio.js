import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import profile from "../../../../../images/profile.png";
import profilebg from "../../../../../images/profilebg.jpg";
import MainLayout from "../../../../ShareComponents/MainLayout/MainLayout";
import SchoolIcon from "@mui/icons-material/School";

import EventSeatIcon from "@mui/icons-material/EventSeat";
import RememberMeIcon from "@mui/icons-material/RememberMe";
import SubjectIcon from "@mui/icons-material/Subject";
import FilterTiltShiftIcon from "@mui/icons-material/FilterTiltShift";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import PhoneIcon from "@mui/icons-material/Phone";

const EditBio = () => {
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
  const onSubmit = (data) => {};
  const semesters = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];
  const shifts = ["None", "1st", "2nd"];
  const sections = ["None", "A", "B", "C", "D"];
  return (
    <MainLayout>
      <div className="lg:w-[70%] bg-gray-50 rounded-md border p-2 mx-auto">
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
            <h1 className="text-xl text-gray-400">Name</h1>
            <button onClick={handleBio}>
              <span className="text-blue-500 mr-3"> EDIT</span>
            </button>
          </div>
          <div className="p-4">
            {!bio ? (
              <h2 className="text-gray-800 text-lg font-bold">Mehedi Hasan</h2>
            ) : (
              <TextField
                {...register("name")}
                defaultValue="Mehedi Hasan"
                id="standard-basic"
                variant="standard"
              />
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default EditBio;
