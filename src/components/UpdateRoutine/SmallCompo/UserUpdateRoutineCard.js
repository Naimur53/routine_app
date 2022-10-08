import React, { useEffect, useState } from 'react';
import TabPanel from '../../Home/smallCompo/TabPanel/TabPanel';
import RoutineClassCard from '../../ShareComponents/RoutineClassCards/RoutineClassCard';
import UserUpdateRoutineSingleCard from './UserUpdateRoutineSingleCard';

const UserUpdateRoutineCard = ({ value, i, day, setData, classes }) => {
    const [filterData, setFilterData] = useState([])
    useEffect(() => {
        let createData = [];

        classes?.forEach((element, index) => {

            if (element.day === day) {
                const select = { ...element, index: index };
                createData = [...createData, select]

            }
        });
        setFilterData(createData)

    }, [day, classes])
    return (
        <TabPanel value={value} index={i}>
            {
                filterData.map((single, j) => <UserUpdateRoutineSingleCard setData={setData} key={j} classes={classes} {...single}>
                    <RoutineClassCard {...single} i={j}></RoutineClassCard>
                </UserUpdateRoutineSingleCard>)
            }
        </TabPanel>
    );
};

export default UserUpdateRoutineCard;