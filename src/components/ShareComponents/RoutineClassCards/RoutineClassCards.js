import React from "react";
import convertToHourMinute, { getAmOrPm } from "../../../utilities/ConvertTime";
import RoutineClassCard from "./RoutineClassCard";
import { motion } from "framer-motion";
import noClass from "../../../images/noClass.gif";
const RoutineClassCards = ({ data, day }) => {
    const mainData = data.filter((single) => single.day === day);
    const am = mainData.filter((single) => getAmOrPm(single.startTime) === "AM");
    const pm = mainData.filter((single) => getAmOrPm(single.startTime) === "PM");
    // 
    const shortAm = [];
    const cardContainer = {
        animate: {
            opacity: 1,
            transition: { staggerChildren: 0.07, delayChildren: 0.2 },
        },
        initial: {
            opacity: 0,
            transition: { staggerChildren: 0.07, delayChildren: 0.2 },
        },
    };

    am.forEach(element => {

        const startTimeHour = parseInt(convertToHourMinute(element.startTime).split(":")[0])

    });
    am.sort(function (a, b) {
        return new Date(a.startTime)
            .toLocaleTimeString()
            .localeCompare(new Date(b.startTime).toLocaleTimeString());
    });
    pm.sort(function (a, b) {
        return new Date(a.startTime)
            .toLocaleTimeString()
            .localeCompare(new Date(b.startTime).toLocaleTimeString());
    });
    const shorted = [...am, ...pm]
    return (
        <motion.div animate="animate" initial="initial" variants={cardContainer}>

            {mainData.length ? (
                shorted.map((single, i) => (
                    <RoutineClassCard key={i} {...single} i={i}></RoutineClassCard>
                ))
            ) : (
                <>
                    <div className="flex justify-center items-center">
                        <img src={noClass} alt="" />
                    </div>
                    <div className="flex justify-center items-center">
                        <h2 className="font-bold text-lg">No class for today ! </h2>
                    </div>
                </>
            )}
        </motion.div>
    );
};

export default RoutineClassCards;
