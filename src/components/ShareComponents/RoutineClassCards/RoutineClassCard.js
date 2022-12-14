import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Tooltip } from "@mui/material";
import textConversion from "../../../utilities/textConversion";
import convertToHourMinute, { getAmOrPm } from "../../../utilities/ConvertTime";
import CustomTooltip from "../CustomTooltip/CustomTooltip";

import { motion } from "framer-motion";
function chooseTheme(i) {
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
            className={bgStyle + " p-4 rounded-xl mb-2"}
        >
            <div className="flex justify-between">
                <div className="flex gap-4">
                    {img ? (
                        <img
                            src={process.env.PUBLIC_URL + img}
                            className="w-[50px]"
                            alt="logo"
                        />
                    ) : (
                        <img src="./images/blue_bol.png" className="w-[50px]" alt="logo" />
                    )}
                    <div>
                        <CustomTooltip title={subjectName}>
                            <h1 className={headingStyle + " font-medium  capitalize"}>
                                {textConversion(subjectName, 20)}
                            </h1>
                        </CustomTooltip>
                        <p className={contentStyle + " text-sm"}> {subjectCode}</p>
                    </div>
                </div>
                <div>
                    <CustomTooltip title={teacherName}>
                        <p className={contentStyle + " font-semibold text-right text-sm"}>
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
