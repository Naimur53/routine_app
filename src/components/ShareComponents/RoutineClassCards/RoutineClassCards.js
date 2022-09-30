import React from "react";
import RoutineClassCard from "./RoutineClassCard";

const RoutineClassCards = ({ data, day }) => {


    return (
        <div>
            {
                data.filter(single => single.day === day).map((single, i) => <RoutineClassCard {...single} i={i}></RoutineClassCard>)
            }
        </div>
    );
};

export default RoutineClassCards;
