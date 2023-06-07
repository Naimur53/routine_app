import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Tooltip } from "@mui/material";
import textConversion from "../../../utilities/textConversion";
import convertToHourMinute, { getAmOrPm } from "../../../utilities/ConvertTime";
import CustomTooltip from "../CustomTooltip/CustomTooltip";

import { motion } from "framer-motion";
const theme = [
    {
        img: "/images/blue_bol.png",
        headingStyle: "text-dark-blue",
        contentStyle: "text-medium-blue",
        bgStyle: "bg-light-blue",
    },
    {
        img: "/images/purple_bol.png",
        headingStyle: "text-dark-purple",
        contentStyle: "text-medium-purple",
        bgStyle: "bg-light-purple",
    },
    {
        img: "/images/orange_bol.png",
        headingStyle: "text-dark-orange",
        contentStyle: "text-medium-orange",
        bgStyle: "bg-light-orange",
    },
    {
        img: "/images/green_bol.png",
        headingStyle: "text-dark-green",
        contentStyle: "text-medium-green",
        bgStyle: "bg-light-green",
    },
];
function chooseTheme(i) {

    if (i < 4) {
        return theme[i];
    } else {
        return chooseTheme(i - 4);
    }
}


const RoutineClassCard = ({
    startTime,
    endTime,
    teacherName,
    roomNumber,
    subjectCode,
    subjectName,
    day,
    i,
}) => {
    const { img, bgStyle, contentStyle, headingStyle } = chooseTheme(i);
    const cardItem = {
        animate: {
            opacity: 1,
        },
        initial: {
            opacity: 0,
        },
    };
    return (
        <motion.div
            variants={cardItem}
            className={bgStyle + " p-2 py-3 xl:p-4 rounded-xl mb-2"}
        >
            <div className="flex justify-between">
                <div className="flex gap-2 md:gap-4 items-center">
                    {img ? (
                        <img
                            src={process.env.PUBLIC_URL + img}
                            className="w-[30px]  md:w-[50px]"
                            alt="logo"
                        />
                    ) : (
                        <img src="./images/blue_bol.png" className="w-[50px]" alt="logo" />
                    )}
                    <div>
                        <CustomTooltip title={subjectName}>
                            <h1 className={headingStyle + " font-medium  text-sm md:text-base capitalize"}>
                                {textConversion(subjectName, 20)}
                            </h1>
                        </CustomTooltip>
                        <p className={contentStyle + " text-sm"}> {subjectCode}</p>
                    </div>
                </div>
                <div className="md:mt-1">
                    <CustomTooltip title={teacherName}>
                        <p className={contentStyle + " font-medium  text-sm md:text-normal capitalize"}>
                            {textConversion(teacherName, 15)}
                        </p>
                    </CustomTooltip>
                </div>
            </div>
            <div className="mt-4">
                <div className="flex items-center justify-between py-2">
                    <div className={headingStyle + " flex items-center gap-2 "}>
                        <AccessTimeIcon className={headingStyle}></AccessTimeIcon>
                        <p className="text-sm">
                            {convertToHourMinute(startTime)} {getAmOrPm(startTime)} -{" "}
                            {convertToHourMinute(endTime)} {getAmOrPm(endTime)}
                        </p>
                    </div>
                    <CustomTooltip title={roomNumber}>
                        <p className={contentStyle + " font-semibold text-sm"}>
                            {textConversion(roomNumber, 15)}
                        </p>
                    </CustomTooltip>
                </div>
            </div>
        </motion.div>
    );
};

export default RoutineClassCard;
