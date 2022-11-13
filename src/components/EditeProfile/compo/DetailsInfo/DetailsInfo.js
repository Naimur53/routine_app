
import React, { useState } from "react";
import SchoolIcon from "@mui/icons-material/School";

import EventSeatIcon from "@mui/icons-material/EventSeat";
import RememberMeIcon from "@mui/icons-material/RememberMe";
import SubjectIcon from "@mui/icons-material/Subject";
import FilterTiltShiftIcon from "@mui/icons-material/FilterTiltShift"
import textConversion from "../../../../utilities/textConversion";
import { Tooltip } from "@mui/material";
import { useSelector } from "react-redux";
import { allData } from "../../../../ManageState/DataSlice/dataSlice";
const DetailsInfo = () => {
    const { user } = useSelector(allData)
    return (
        <div>
            <div className="flex">
                <SchoolIcon className="m-2 text-gray-400 "></SchoolIcon>

                <Tooltip title={user.institute}>
                    <p className="text-gray-400 text-lg mt-2 ">
                        {
                            user.institute ? <span> Study at {textConversion(user.institute, 100)}</span> : <span>Study at Institute name </span>
                        }
                    </p>
                </Tooltip>
            </div>
            <div className="flex">
                <SubjectIcon className="m-2 text-gray-400 "></SubjectIcon>

                <Tooltip title={user.department}>
                    <p className="text-gray-400 text-lg mt-2 ">
                        {
                            user.department ? <span>
                                Department: {textConversion(user.department, 25)}{" "}
                            </span> : <span>Department:  Your department</span>
                        }
                    </p>
                </Tooltip>

            </div>
            <div className="flex">
                <EventSeatIcon className="m-2 text-gray-400 "></EventSeatIcon>

                <p className="text-gray-400 text-lg mt-2 "> Semester : {user.semester || <span>UnKnown</span>}</p>

            </div>
            <div className="flex">
                <FilterTiltShiftIcon className="m-2 text-gray-400 "></FilterTiltShiftIcon>

                <p className=" text-gray-400 text-lg mt-2"> Shift : {user.shift || <span>UnKnown</span>}</p>

            </div>
            <div className="flex">
                <RememberMeIcon className="m-2 text-gray-400 "></RememberMeIcon>

                <p className="text-gray-400 text-lg mt-2 "> section : {user.section || <span>UnKnown</span>}</p>

            </div>
        </div>
    );
};

export default DetailsInfo;