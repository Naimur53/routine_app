import React, { useState } from "react";
// import "./DemoCard.css";
import profile from "../../../images/profile.png";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Container,
  Grid,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import convertToHourMinute from "../../../utilities/ConvertTime";
import textConversion from "./../../../utilities/textConversion";
import { Link, NavLink } from "react-router-dom";
const DemoCard = (item) => {
  const { institute, department, semester, section, shift } = item.item;
  const {
    subjectName,
    subjectCode,
    teacherName,
    day,
    roomNumber,
    startTime,
    endTime,
  } = item.classes[0];
  console.log(item.classes.length, "feom leaklsjd");
  const handleCheckout = () => {
    console.log("click in checkout");
  };
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const [open, setOpen] = useState(false);
  return (
    <div className="card-container w-full   ">
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="w-full h-[200px]  relative  n overflow-hidden"
      >
        <div className="details_card_wrap    bg-light-blue p-2 shadow-md text-dark-blue">
          <div className="content text-center  ">
            <div className="mb-4 ">
              <h3 className=" text-lg"> {textConversion(institute, 20)}</h3>
              <p className="text-sm">{department} department</p>
              <p className="text-sm">{semester} Semester</p>
            </div>
            <div className="flex justify-between text-xs   ">
              <p> Section: {section} </p>
              <p> Shift:{shift} </p>
            </div>
          </div>
        </div>

        <div
          className={`details_card_wrap  transition-all absolute  left-0 right-0 bg-[ ] w-full ${
            open ? "top-0" : "top-[158px]"
          }`}
        >
          <div className="h-full flex flex-col justify-between border      drop-shadow-lg border-bottom-1   bg-white shadow-xl   text-black ">
            <div className="h-[40px] bg-white shadow-md flex justify-center items-center mb-2  border-gray-200">
              <hr className="w-[30px] rounded-md h-[4px] bg-blue-500"></hr>
            </div>
            <div className="p-2 shadow-sm ">
              <div className=" flex justify-between m-2 ">
                <img
                  className=" rounded-full h-10 mr-2 "
                  src={profile}
                  alt=""
                />

                <div className="flex-1 mt-1">
                  <h3 className="text-xs">Mehedi Hasan</h3>
                  <p className="text-xs">Mehedi@gmail.com</p>
                </div>
              </div>
              <div className="">
                {" "}
                <p className="text-sm">Published Date {date}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm"> Total Class </p>
                <p className="text-sm"> Total User </p>
              </div>

              <div className="text-center text-sm">
                <Button
                  onClick={handleCheckout}
                  color="secondary"
                  variant="outlined"
                  size="small"
                >
                  <NavLink to="/checkout">Checkout</NavLink>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoCard;
