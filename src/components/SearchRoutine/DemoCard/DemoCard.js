import React, { useState } from "react";
// import "./DemoCard.css";
import profile from "../../../images/profile.png";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { Avatar, Button, IconButton, Skeleton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import textConversion from "./../../../utilities/textConversion";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { formatDistance, subDays } from "date-fns";

function chooseTheme(i) {
  const theme = [
    {
      img: "./images/blue_bol.png",
      headingStyle: "bg-dark-blue",
      contentStyle: "text-medium-blue",
      bgStyle: "bg-light-blue",
    },
    {
      img: "./images/purple_bol.png",
      headingStyle: "bg-dark-purple",
      contentStyle: "text-medium-purple",
      bgStyle: "bg-light-purple",
    },
    {
      img: "./images/orange_bol.png",
      headingStyle: "bg-dark-orange",
      contentStyle: "text-medium-orange",
      bgStyle: "bg-light-orange",
    },
    {
      img: "./images/green_bol.png",
      headingStyle: "bg-dark-green",
      contentStyle: "text-medium-green",
      bgStyle: "bg-light-green",
    },
  ];
  if (i < 4) {
    return theme[i];
  } else {
    return chooseTheme(i - 4);
  }
}
const DemoCard = ({ item, updateAble, i, getLoeading, handleDelete, deleteAble }) => {
  const { img, bgStyle, contentStyle, headingStyle } = chooseTheme(i);


  const { institute, department, semester, section, shift, classes, creator, _id, } = item;

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1
    }/${current.getFullYear()}`;

  const [open, setOpen] = useState(false);

  return (
    <div className="card-container w-full   ">
      <div
        onClick={(e) => {
          setOpen(!open);
        }}
        className="w-full h-[200px]  relative  n overflow-hidden"
      >
        <div
          className={`details_card_wrap ${bgStyle}   p-2 shadow-md text-${headingStyle}`}
        >
          <div className="content   ">
            <div className="mb-4 flex  gap-3">
              <div className="">
                <img className="w-[50px]" src={img} alt="" />
              </div>
              <div className="">
                <Tooltip title={institute}>
                  <h3 className=" text-lg"> {textConversion(institute, 18)}</h3>
                </Tooltip>
                <div className="flex gap-5">
                  <Tooltip title={department}>
                    <p className={`text-sm ${contentStyle}`}>{department}</p>
                  </Tooltip>
                  <p className={`text-sm ${contentStyle}`}>
                    {semester} sem
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between text-xs   ">
              <p className={`text-sm ${contentStyle}`}> Section: {section} </p>
              <p className={`text-sm ${contentStyle}`}> Shift:{shift} </p>
            </div>
            <div className=" flex justify-between  mt-3 items-center ">
              <img
                className=" rounded-full w-6 mr-2 "
                src={creator?.photoURL}
                alt="creator"
              />

              <div className="flex-1 ">
                <p className="text-xs">creator</p>
                <h3 className="text-xs">{creator?.displayName}</h3>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`details_card_wrap  transition-all absolute  left-0 right-0   w-full ${open ? "top-0" : "top-[158px]"
            }`}
        >
          <div className="h-full flex flex-col justify-between border  drop-shadow-lg border-bottom-1   bg-white shadow-xl   text-black ">
            <div className="h-[40px] bg-white shadow-md flex justify-center items-center mb-2  border-gray-200">
              <hr
                className={`w-[30px] rounded-md h-[4px] ${headingStyle}`}
              ></hr>
            </div>
            <div className="p-2 shadow-sm ">
              <div className="">
                {" "}
                <p className="text-sm">Published Date {date}</p>
              </div>
              <div className="flex justify-between ">
                <p className="text-sm">
                  {" "}
                  Total Class{" "}
                  {typeof classes === "number" ? classes : classes?.length}
                </p>
                <p className="text-sm"> Total User </p>
              </div>

              <div className="text-center text-sm flex items-center justify-around  mt-3">
                <NavLink
                  to={`/checkout/${_id}`}
                >
                  <Button
                    color="secondary"
                    variant="outlined"
                    size="small"
                  >

                    Checkout
                  </Button>
                </NavLink>

                {updateAble ? (
                  <>
                    <IconButton
                      aria-label="delete"
                      onClick={() => handleDelete(_id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <NavLink to={`/update/${_id}`}>
                      <Tooltip title='Update routine'>
                        <IconButton aria-label="update">
                          <DriveFileRenameOutlineIcon />
                        </IconButton>
                      </Tooltip>
                    </NavLink>
                  </>
                ) : deleteAble ? <IconButton
                  aria-label="delete"
                  onClick={(e) => {
                    handleDelete(_id)
                  }}
                >
                  <DeleteIcon />
                </IconButton> : <></>

                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoCard;
