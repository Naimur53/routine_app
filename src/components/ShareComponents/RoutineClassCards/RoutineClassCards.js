import React from "react";
import convertToHourMinute, { getAmOrPm } from "../../../utilities/ConvertTime";
import RoutineClassCard from "./RoutineClassCard";

const RoutineClassCards = ({ data, day }) => {

    const mainData = data.filter(single => single.day === day);
    const am = mainData.filter(single => getAmOrPm(single.startTime) === 'AM')
    const pm = mainData.filter(single => getAmOrPm(single.startTime) === 'PM')
    console.log({ am, pm })
    const shortAm = [];

    // am.forEach(element => {

    //     const startTimeHour = parseInt(convertToHourMinute(element.startTime).split(":")[0])
    //     console.log(startTimeHour)
    // });
    am.sort(function (a, b) {
        return new Date(a.startTime).toLocaleTimeString().localeCompare(new Date(b.startTime).toLocaleTimeString());
    });
    pm.sort(function (a, b) {
        return new Date(a.startTime).toLocaleTimeString().localeCompare(new Date(b.startTime).toLocaleTimeString());
    });

    return (
        <div>
            {
                mainData.length ? [...am, ...pm].map((single, i) => <RoutineClassCard key={i} {...single} i={i}></RoutineClassCard>) : <div className="flex justify-center items-center">
                    <h2>No class for today! </h2>
                </div>
            }
        </div>
    );
};

export default RoutineClassCards;
