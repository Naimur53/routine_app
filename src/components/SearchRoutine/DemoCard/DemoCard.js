import React, { useState } from "react";
// import "./DemoCard.css";
import profile from "../../../images/profile.png";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { Avatar, Button, IconButton, Skeleton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import textConversion from "./../../../utilities/textConversion";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { formatDistance, subDays, format } from "date-fns";
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleIcon from '@mui/icons-material/People';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import axios from "axios";
import CustomTooltip from "../../ShareComponents/CustomTooltip/CustomTooltip";
function chooseTheme(i) {
  const theme = [
    {
      img: "/images/blue_bol.png",
      headingStyle: "bg-dark-blue",
      contentStyle: "text-medium-blue",
      bgStyle: "bg-light-blue",
    },
    {
      img: "/images/purple_bol.png",
      headingStyle: "bg-dark-purple",
      contentStyle: "text-medium-purple",
      bgStyle: "bg-light-purple",
    },
    {
      img: "/images/orange_bol.png",
      headingStyle: "bg-dark-orange",
      contentStyle: "text-medium-orange",
      bgStyle: "bg-light-orange",
    },
    {
      img: "/images/green_bol.png",
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
const DemoCard = ({ item, updateAble, i, admin, getLoeading, setData, deleteAble }) => {
  const { img, bgStyle, contentStyle, headingStyle } = chooseTheme(i);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const { institute, department, semester, section, shift, classes, creator, _id, date: publishedDate, totalUserUsing } = item;
  // const [open, setOpen] = useState(false);
  const date = publishedDate ? format(new Date(publishedDate), 'PP') : 'Date is not valid'
  // const date = 'publishedDate'
  // console.log({ publishedDate })
  // console.log({ a })
  const handleDelete = () => {
    if (!deleteLoading) {
      if (window.confirm("are you sure ?")) {
        setDeleteLoading(true)
        axios.delete(`http://localhost:5001/routine/${_id}`)
          .then(res => {
            setDeleteLoading(false)
            setData(pre => {
              return pre.filter(single => single._id !== _id)
            })
          })
      }
    }
  }
  return (

    <div className=" w-full ">
      <div
        className="w-full relative overflow-hidden  rounded-md shadow-md"
      >
        {
          deleteLoading && <div className="absolute inset-0 backdrop-blur-sm bg-white/[.3] z-10  "></div>
        }


        <div
          className={`details_card_wrap ${bgStyle}  rounded-md p-2 text-${headingStyle}`}
        >
          <div className="content   ">
            <div className="mb-4 flex  gap-3">
              <div className="">
                {
                  img && <img className="w-[50px]" src={process.env.PUBLIC_URL + img} alt="logo" />
                }

              </div>
              <div className="">
                <CustomTooltip title={institute}>
                  <h3 className=" text-lg"> {textConversion(institute, 18)}</h3>
                </CustomTooltip>
                <div className="flex gap-5">
                  <CustomTooltip title={department}>
                    <p className={`text-sm ${contentStyle}`}>{textConversion(department, 9)}</p>
                  </CustomTooltip>
                  <p className={`text-sm ${contentStyle}`}>
                    {semester} sem
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between text-xs ">
              <div className={`text-sm ${contentStyle}`}>
                <p > Shift:{shift} </p>
                <CustomTooltip title='Total class'>
                  <div className="flex justify-center items-center mt-3  gap-2">
                    <LibraryBooksIcon></LibraryBooksIcon>
                    <span>
                      {typeof classes === "number" ? classes : classes?.length}
                    </span>
                  </div>
                </CustomTooltip>
              </div>
              <div className={`text-sm text-right ${contentStyle}`}>
                <p className={`text-sm ${contentStyle}`}> Section: {section} </p>
                <div className={`text-sm mt-3 ${contentStyle}`}>
                  <CustomTooltip title='Total user using this routine'>
                    <div className="flex justify-center items-center gap-2">
                      <PeopleIcon></PeopleIcon>
                      <span className="text-sm"> {totalUserUsing} </span>
                    </div>
                  </CustomTooltip>

                </div>
              </div>
            </div>
            <div className="flex gap-2 px-2 mt-3 items-center ">
              <Avatar
                sx={{ width: 32, height: 32 }}
                src={creator?.photoURL}
                alt="creator"
              />

              <div className=" ">
                <CustomTooltip title={"Creator " + creator?.displayName}>

                  <h3 className="text-xs capitalize">{textConversion(creator?.displayName, 25)}</h3>
                </CustomTooltip>
                <CustomTooltip title="Published Date">
                  <div className="text-xs">
                    <span className=""> {date}</span>
                  </div>
                </CustomTooltip>
              </div>
            </div>
            <div>
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
                    <NavLink to={admin ? `/dashboard/manageRoutine/update/${_id}` : `/update/${_id}`}>
                      <CustomTooltip title='Update routine'>
                        <IconButton aria-label="update">
                          <DriveFileRenameOutlineIcon />
                        </IconButton>
                      </CustomTooltip>
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
