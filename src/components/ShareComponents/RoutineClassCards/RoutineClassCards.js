import React from 'react';
import RoutineClassCard from './RoutineClassCard';

const RoutineClassCards = ({ data }) => {


    return (
        <div>
            {
                data.map((single, i) => <RoutineClassCard {...single} i={i}></RoutineClassCard>)
            }
        </div>
    );
};

export default RoutineClassCards;