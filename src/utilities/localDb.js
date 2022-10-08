//default function
const parseData = (data) => {
    if (data?.length) {
        return JSON.parse(data);
    }
    return null;
};

const stringifyData = (data) => {
    return JSON.stringify(data);
};
// new const  localBb={key:'value'};

// get data. myNotes;
const getDataFromLocalDb = (key) => {
    const value = parseData(localStorage.getItem(key));
    if (!value) {
        localStorage.setItem(key, stringifyData([]));
        return [];
    }

    return value;
};
// put data
const putDataInLocalDb = (key, data, reverse) => {
    const beforeData = getDataFromLocalDb(key);
    if (data) {
        const newData = reverse ? [data, ...beforeData,] : [...beforeData, data];
        localStorage.setItem(key, stringifyData(newData));
        return newData;
    }
    console.error("I cannot keep data on local db");
};
const saveRoutine = (data) => {
    const beforeSavedData = getDataFromLocalDb("routines")
    const exist = beforeSavedData.find(single => single._id === data._id);
    if (!data?._id) {
        return { response: 'Something is wrong while save data', status: 400 }
    }
    if (!exist) {
        putDataInLocalDb('routines', data, true)
        return { response: 'successfully save', status: 200 }
    }
    return { response: 'This routine already exist ', status: 400 }


}
const a = {
    classes: [
        {
            subjectName: "Fundamental",
            subjectCode: "6645dfd4",
            teacherName: "Naimur Rahman",
            day: "Sunday",
            roomNumber: "116",
            startTime: "Thu Sep 29 2022 07:00:00 GMT+0600 (Bangladesh Standard Time)",
            endTime: "Thu Sep 29 2022 04:00:00 GMT+0600 (Bangladesh Standard Time)"
        }
    ],
    institute: "Brahmanbaria Polytechnic Institute , Brahmanbaria",
    department: "dfdsf",
    semester: "1st",
    shift: "None",
    section: "B"
}
//update data
const updateLocalDb = (key, updatedData) => {
    localStorage.setItem(key, JSON.stringify(updatedData));
};

export { putDataInLocalDb, getDataFromLocalDb, updateLocalDb, saveRoutine }; 
