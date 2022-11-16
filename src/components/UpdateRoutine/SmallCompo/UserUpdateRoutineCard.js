import React, { useEffect, useState } from 'react';
import { getAmOrPm } from '../../../utilities/ConvertTime';
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
        const am = createData.filter(single => getAmOrPm(single.startTime) === 'AM')
        const pm = createData.filter(single => getAmOrPm(single.startTime) === 'PM')

        am.sort(function (a, b) {
            return new Date(a.startTime).toLocaleTimeString().localeCompare(new Date(b.startTime).toLocaleTimeString());
        });
        pm.sort(function (a, b) {
            return new Date(a.startTime).toLocaleTimeString().localeCompare(new Date(b.startTime).toLocaleTimeString());
        });
        setFilterData([...am, ...pm])

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