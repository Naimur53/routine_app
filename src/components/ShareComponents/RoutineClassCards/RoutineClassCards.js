import React from "react";
import RoutineClassCard from "./RoutineClassCard";

const RoutineClassCards = ({ data, day }) => {

    const mainData = data.filter(single => single.day === day);
    return (
        <div>
            {
                mainData.length ? mainData.map((single, i) => <RoutineClassCard key={i} {...single} i={i}></RoutineClassCard>) : <div className="flex justify-center items-center">
                    <h2>No class for today! </h2>
                </div>
            }
        </div>
    );
};

export default RoutineClassCards;
