import React, { useState } from "react";
// import "./DemoCard.css";
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
const DemoCard = (item) => {
  const { institute, semester, department, totalClass, i, routineUses } =
    item.item;
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
        <div className="details_card_wrap    bg-green-100 p-2 shadow-md">
          <div className="content text-center  ">
            <div className="mb-4 ">
              <h3 className=" text-lg">{institute}</h3>
              <p className="text-sm">{department} department</p>
              <p className="text-sm">{semester} Semester</p>
            </div>
            <div className="flex justify-between text-xs   ">
              <p>Total Class:{totalClass}</p>
              <p>Routine User :{totalClass}</p>
            </div>
          </div>
        </div>

        <div
          className={`details_card_wrap  transition-all absolute  left-0 right-0 bg-[] w-full ${
            open ? "top-0" : "top-[150px]"
          }`}
        >
          <div className="h-full f lex flex-col justify-between  border border-green-100 bg-gray-200 drop-shadow-kg  ">
            <div className="h-[50px] bg-gray-100 shadow-md flex justify-center items-center">
              <hr className="w-[30px] rounded-md h-[4px] bg-green-500"></hr>
            </div>
            <div className="content p-2">
              <h3>Hello there!</h3>

              <p>Trust yourself and keep going.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoCard;
