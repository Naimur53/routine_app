import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { allData } from "../../../../ManageState/DataSlice/dataSlice";
import PrivateRoute from "../../../PrivateRoute/PrivateRoute";
import OnlineRoute from "../../../ShareComponents/OnlineRoute/OnlineRoute";
import ChatRoom from "../ChatRoom/ChatRoom";
import loginImg from "../../../../images/login.png";
const Chat = ({ allRoutineData }) => {
  const { user } = useSelector(allData);

  if (!user._id) {
    return (
      <div className="h-full bg-light-purple flex flex-col justify-center items-center">
        <>
          <img
            src={"https://i.ibb.co/R67R2J1/images-removebg-preview.png"}
            alt=""
          />
          <h2 className="mb-2 text-md">Login to send Message</h2>
          <Button variant="outlined">
            <NavLink to="/login" className="text-dark-purple font-bold">
              Login
            </NavLink>
          </Button>
        </>
      </div>
    );
  }
  return (
    <>
      <OnlineRoute withoutLayout>
        <ChatRoom allRoutineData={allRoutineData}></ChatRoom>
      </OnlineRoute>
    </>
  );
};

export default Chat;
