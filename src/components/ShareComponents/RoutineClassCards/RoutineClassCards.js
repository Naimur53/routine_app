import React from 'react';
import RoutineClassCard from './RoutineClassCard';

const RoutineClassCards = () => {
    const data = [
        {
            day: "Sunday",
            endTime: "Sat Sep 17 2022 03:30:00 GMT+0600 (Bangladesh Standard Time)",
            startTime: "Sat Sep 17 2022 02:00:00 GMT+0600 (Bangladesh Standard Time)",
            subjectCode: "6645dfd4",
            subjectName: "Fundamental",
            teacherName: "Naimur Rahman"
        },
        {
            day: "Monday",
            endTime: "Sat Sep 17 2022 02:15:00 GMT+0600 (Bangladesh Standard Time)",
            startTime: "Sat Sep 17 2022 01:30:00 GMT+0600 (Bangladesh Standard Time)",
            subjectCode: "6645dfd4",
            subjectName: "physics",
            teacherName: "Sheikh Sadi"
        },
        {
            subjectName: "Chemistry",
            subjectCode: "6645dfd4",
            teacherName: "Ovi Sheikh",
            day: "Monday",
            startTime: "Sat Sep 17 2022 02:30:00 GMT+0600 (Bangladesh Standard Time)",
            endTime: "Sat Sep 17 2022 02:30:00 GMT+0600 (Bangladesh Standard Time)"
        },
        {
            "subjectName": "Biology",
            "subjectCode": "6645dfd4",
            "teacherName": "Akash Hossain",
            "day": "Tuesday",
            "startTime": "Sat Sep 17 2022 03:00:00 GMT+0600 (Bangladesh Standard Time)",
            "endTime": "Sat Sep 17 2022 03:45:00 GMT+0600 (Bangladesh Standard Time)"
        },
        {
            day: "Sunday",
            endTime: "Sat Sep 17 2022 03:30:00 GMT+0600 (Bangladesh Standard Time)",
            startTime: "Sat Sep 17 2022 02:00:00 GMT+0600 (Bangladesh Standard Time)",
            subjectCode: "6645dfd4",
            subjectName: "Fundamental",
            teacherName: "Naimur Rahman"
        },
        {
            day: "Monday",
            endTime: "Sat Sep 17 2022 02:15:00 GMT+0600 (Bangladesh Standard Time)",
            startTime: "Sat Sep 17 2022 01:30:00 GMT+0600 (Bangladesh Standard Time)",
            subjectCode: "6645dfd4",
            subjectName: "physics",
            teacherName: "Sheikh Sadi"
        },
        {
            subjectName: "Chemistry",
            subjectCode: "6645dfd4",
            teacherName: "Ovi Sheikh",
            day: "Monday",
            startTime: "Sat Sep 17 2022 02:30:00 GMT+0600 (Bangladesh Standard Time)",
            endTime: "Sat Sep 17 2022 02:30:00 GMT+0600 (Bangladesh Standard Time)"
        },
        {
            subjectName: "Biology",
            subjectCode: "6645dfd4",
            teacherName: "Akash Hossain",
            day: "Tuesday",
            startTime: "Sat Sep 17 2022 03:00:00 GMT+0600 (Bangladesh Standard Time)",
            endTime: "Sat Sep 17 2022 03:45:00 GMT+0600 (Bangladesh Standard Time)"
        },
        {
            day: "Sunday",
            endTime: "Sat Sep 17 2022 03:30:00 GMT+0600 (Bangladesh Standard Time)",
            startTime: "Sat Sep 17 2022 02:00:00 GMT+0600 (Bangladesh Standard Time)",
            subjectCode: "6645dfd4",
            subjectName: "Fundamental",
            teacherName: "Naimur Rahman"
        },
        {
            day: "Monday",
            endTime: "Sat Sep 17 2022 02:15:00 GMT+0600 (Bangladesh Standard Time)",
            startTime: "Sat Sep 17 2022 01:30:00 GMT+0600 (Bangladesh Standard Time)",
            subjectCode: "6645dfd4",
            subjectName: "physics",
            teacherName: "Sheikh Sadi"
        },
        {
            subjectName: "Chemistry",
            subjectCode: "6645dfd4",
            teacherName: "Ovi Sheikh",
            day: "Monday",
            startTime: "Sat Sep 17 2022 02:30:00 GMT+0600 (Bangladesh Standard Time)",
            endTime: "Sat Sep 17 2022 02:30:00 GMT+0600 (Bangladesh Standard Time)"
        },
        {
            "subjectName": "Biology",
            "subjectCode": "6645dfd4",
            "teacherName": "Akash Hossain",
            "day": "Tuesday",
            "startTime": "Sat Sep 17 2022 03:00:00 GMT+0600 (Bangladesh Standard Time)",
            "endTime": "Sat Sep 17 2022 03:45:00 GMT+0600 (Bangladesh Standard Time)"
        },
        {
            day: "Sunday",
            endTime: "Sat Sep 17 2022 03:30:00 GMT+0600 (Bangladesh Standard Time)",
            startTime: "Sat Sep 17 2022 02:00:00 GMT+0600 (Bangladesh Standard Time)",
            subjectCode: "6645dfd4",
            subjectName: "Fundamental",
            teacherName: "Naimur Rahman"
        },
        {
            day: "Monday",
            endTime: "Sat Sep 17 2022 02:15:00 GMT+0600 (Bangladesh Standard Time)",
            startTime: "Sat Sep 17 2022 01:30:00 GMT+0600 (Bangladesh Standard Time)",
            subjectCode: "6645dfd4",
            subjectName: "physics",
            teacherName: "Sheikh Sadi"
        },
        {
            subjectName: "Chemistry",
            subjectCode: "6645dfd4",
            teacherName: "Ovi Sheikh",
            day: "Monday",
            startTime: "Sat Sep 17 2022 02:30:00 GMT+0600 (Bangladesh Standard Time)",
            endTime: "Sat Sep 17 2022 02:30:00 GMT+0600 (Bangladesh Standard Time)"
        },
        {
            subjectName: "Biology tor mai kahibr df dfdfdfdfdfd fdfd df df d df d  dfdf dfd fdfd dfdfd df dfdfd fdfweredfd df dfdref a",
            subjectCode: "6645dfd4",
            teacherName: "Akash Hossain",
            day: "Tuesday",
            startTime: "Sat Sep 17 2022 03:00:00 GMT+0600 (Bangladesh Standard Time)",
            endTime: "Sat Sep 17 2022 03:45:00 GMT+0600 (Bangladesh Standard Time)"
        },

    ]


    return (
        <div>
            {
                data.map((single, i) => <RoutineClassCard {...single} i={i}></RoutineClassCard>)
            }
        </div>
    );
};

export default RoutineClassCards;