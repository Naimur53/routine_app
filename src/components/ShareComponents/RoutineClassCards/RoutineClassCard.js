import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Tooltip } from "@mui/material";
import textConversion from "../../../utilities/textConversion";
import convertToHourMinute from "../../../utilities/ConvertTime";

function chooseTheme(i) {
    const theme = [
        { img: './images/blue_bol.png', headingStyle: 'text-dark-blue', contentStyle: 'text-medium-blue', bgStyle: "bg-light-blue" },
        { img: './images/purple_bol.png', headingStyle: 'text-dark-purple', contentStyle: 'text-medium-purple', bgStyle: "bg-light-purple" },
        { img: './images/orange_bol.png', headingStyle: 'text-dark-orange', contentStyle: 'text-medium-orange', bgStyle: "bg-light-orange" },
        { img: './images/green_bol.png', headingStyle: 'text-dark-green', contentStyle: 'text-medium-green', bgStyle: "bg-light-green" },

    ]
    if (i < 4) {
        return theme[i];
    }
    else {
        return chooseTheme(i - 4);
    }
}


const RoutineClassCard = ({ startTime, endTime, teacherName, roomNumber, subjectCode, subjectName, day, i }) => {
    const { img, bgStyle, contentStyle, headingStyle, } = chooseTheme(i);
    return (
        <div className={bgStyle + ' p-4 rounded-xl mb-2'}>
            <div className="flex justify-between">
                <div className='flex gap-4'>
                    <img src={img} className='w-[50px]' alt="logo" />
                    <div>
                        <Tooltip title={subjectName}>
                            <h1 className={headingStyle + ' font-medium  capitalize'}>{textConversion(subjectName, 20)}</h1>
                        </Tooltip>
                        <p className={contentStyle + " text-sm"}>{subjectCode}</p>
                    </div>
                </div>
                <div>
                    <Tooltip title={teacherName}>
                        <p className={contentStyle + " font-semibold text-right text-sm"}>
                            {textConversion(teacherName, 15)}
                        </p>
                    </Tooltip>
                </div>
            </div>
            <div className='mt-4'>
                <div className='flex justify-between'>
                    <div className={headingStyle + " flex gap-2 mb-2"}>
                        <AccessTimeIcon className={headingStyle}></AccessTimeIcon>
                        <p>{convertToHourMinute(startTime)} - {convertToHourMinute(endTime)}</p>
                    </div>
                    <Tooltip title={roomNumber}>
                        <p className={contentStyle + " font-semibold text-sm"}>
                            {textConversion(roomNumber, 15)}
                        </p>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
};

export default RoutineClassCard;
