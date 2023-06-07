import { Tab } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import convertToHourMinute, { getAmOrPm } from '../../../../utilities/ConvertTime';

const SingleTab = ({ day, classes, i, value, handleChange, a11yProps }) => {
    const [info, setInfo] = useState({ totalClass: 0, totalHour: 0 })

    useEffect(() => {
        const allClasses = classes.filter(single => single.day === day);
        let totalHour = 0;
        let shortClassName = [];
        // allClasses.forEach(element => {
        //     const start = new Date(element.startTime);
        //     const end = new Date(element.endTime);
        //     const startTime = start.getTime();
        //     const endTime = end.getTime();
        //     
        //     shortClassName = [...shortClassName, element.subjectName?.slice(0, 3)]
        //     if (endTime > startTime) {
        //         totalHour += new Date(start - end).getHours()
        //     }

        // });
        allClasses.forEach(single => {
            // const getHour = 0;
            // const getMinutes = 1;
            // const getDayOrNight = 2;

            // const startTime = convertToHourMinute(single.startTime) + ":" + getAmOrPm(single.startTime)
            // const endTime = convertToHourMinute(single.endTime) + ":" + getAmOrPm(single.endTime)
            // const parseTime = (index, time) => {
            //     if (index === getDayOrNight) {
            //         // return string
            //         return time.split(':')[index]
            //     } else {
            //         return parseInt(time.split(':')[index]);
            //     }
            // }
            // //convert time to float number
            // const convertTimeToNumber = (hour, minute) => {
            //     if (minute === 60) {
            //         return hour + 1;
            //     }
            //     else if (minute > 60) {

            //     }
            // }
            function getHoursDiff(startDate, endDate) {
                const msInHour = 1000 * 60 * 60;
                return Math.round(Math.abs(endDate - startDate) / msInHour);
            }
            totalHour += getHoursDiff(new Date(single.startTime), new Date(single.endTime))
            // if am,am or pm pm
            // if (parseTime(getDayOrNight, startTime) === parseTime(getDayOrNight, endTime)) {
            //     // 
            //     const calHours = parseTime(getHour, endTime) - parseTime(getHour, startTime)
            //     const calTime = parseTime(getMinutes, endTime) + ((parseTime(getMinutes, startTime) || 60))


            //     
            // }

        })
        setInfo({ shortClassName: shortClassName.join(', '), totalHour, totalClass: allClasses.length })

    }, [classes, day])
    return (
        <button className='cursor-pointer' type='button' onClick={() => handleChange(i)}>
            <div className={`flex flex-col lg:flex-row justify-center lg:justify-start items-center py-1 md:py-3 px-2 gap-4 rounded-2xl text-main-dark ${value === i && " active_class_tab"}`}>
                <div className={`border-b lg:border-b-0 lg:border-r w-[80px] h-[50px] flex justify-center items-center  border-content `}>
                    <h1 className='text-xl md:text-2xl  font-medium'>{day.slice(0, 3)}</h1>
                </div>
                <div className='text-left text-sm pb-2'>
                    <h2 className='text-main-dark '> {info.totalClass} Classes</h2>
                    <p className='text-content '> <span className='hidden lg:inline-block'> </span>{info.totalHour} hours<span className='inline-block lg:hidden'></span></p>
                </div>
            </div>
        </button>
    )
}
export default SingleTab;