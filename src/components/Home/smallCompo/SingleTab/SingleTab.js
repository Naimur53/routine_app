import { Tab } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';

const SingleTab = ({ day, classes, i, value, handleChange, a11yProps }) => {
    const [info, setInfo] = useState({ totalClass: 0, totalHour: 0 })

    useEffect(() => {
        const allClasses = classes.filter(single => single.day === day);
        let totalHour = 0;
        let shortClassName = [];
        allClasses.forEach(element => {
            const start = new Date(element.startTime);
            const end = new Date(element.endTime);
            const startTime = start.getTime();
            const endTime = end.getTime();
            console.log(element.subjectName)
            shortClassName = [...shortClassName, element.subjectName?.slice(0, 3)]
            if (endTime > startTime) {
                totalHour += new Date(start - end).getHours()
            }

        });
        setInfo({ shortClassName: shortClassName.join('-'), totalHour, totalClass: allClasses.length })

    }, [classes, day])
    return (
        <button className='cursor-pointer' type='button' onClick={() => handleChange(i)}>
            <div className={`flex flex-col lg:flex-row justify-center lg:justify-start items-center py-3 px-2 gap-4 rounded-2xl text-main-dark ${value === i && " active_class_tab"}`}>
                <div className={`border-b lg:border-b-0 lg:border-r w-[80px] h-[50px] flex justify-center items-center  border-content `}>
                    <h1 className='text-2xl  font-medium'>{day.slice(0, 3)}</h1>
                </div>
                <div className='text-left'>
                    <h2 className='text-main-dark '> {info.totalClass} Classes</h2>
                    <p className='text-content '> <span className='hidden lg:inline-block'> </span>{info.shortClassName} <span className='inline-block lg:hidden'> Hours</span></p>
                </div>
            </div>
        </button>
    )
}
export default SingleTab;