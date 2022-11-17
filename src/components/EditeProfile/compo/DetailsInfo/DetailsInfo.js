import React, { useState } from "react";
import SchoolIcon from "@mui/icons-material/School";

import EventSeatIcon from "@mui/icons-material/EventSeat";
import RememberMeIcon from "@mui/icons-material/RememberMe";
import SubjectIcon from "@mui/icons-material/Subject";
import FilterTiltShiftIcon from "@mui/icons-material/FilterTiltShift";
import textConversion from "../../../../utilities/textConversion";
import { Tooltip } from "@mui/material";
import { useSelector } from "react-redux";
import { allData } from "../../../../ManageState/DataSlice/dataSlice";
const DetailsInfo = ({ data }) => {
    // const { user } = useSelector(allData)
    return (
        <div>
            <div className="flex">
                <SchoolIcon className="m-2 text-gray-400 "></SchoolIcon>

                <Tooltip title={data.institute}>
                    <p className="text-gray-400 text-lg mt-2 ">
                        {data?.institute ? (
                            <span> Study at {textConversion(data.institute, 100)}</span>
                        ) : (
                            <span>Study at Unknown </span>
                        )}
                    </p>
                </Tooltip>
            </div>
            <div className="flex">
                <SubjectIcon className="m-2 text-gray-400 "></SubjectIcon>

                <Tooltip title={data?.department}>
                    <p className="text-gray-400 text-lg mt-2 ">
                        {data?.department ? (
                            <span>Department: {textConversion(data.department, 25)} </span>
                        ) : (
                            <span>Department: Unknown</span>
                        )}
                    </p>
                </Tooltip>
            </div>
            <div className="flex">
                <EventSeatIcon className="m-2 text-gray-400 "></EventSeatIcon>

                <p className="text-gray-400 text-lg mt-2 ">
                    {" "}
                    Semester : {data.semester || <span>UnKnown</span>}
                </p>
            </div>
            <div className="flex">
                <FilterTiltShiftIcon className="m-2 text-gray-400 "></FilterTiltShiftIcon>

                <p className=" text-gray-400 text-lg mt-2">
                    {" "}
                    Shift : {data?.shift || <span>UnKnown</span>}
                </p>
            </div>
            <div className="flex">
                <RememberMeIcon className="m-2 text-gray-400 "></RememberMeIcon>

                <p className="text-gray-400 text-lg mt-2 ">
                    {" "}
                    section : {data?.section || <span>UnKnown</span>}
                </p>
            </div>
        </div>
    );
};

export default DetailsInfo;
