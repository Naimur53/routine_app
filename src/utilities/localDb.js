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
    console.log(value);
    return value;
};
// put data
const putDataInLocalDb = (key, data) => {
    const beforeData = getDataFromLocalDb(key);
    if (data) {
        const newData = [...beforeData, data];
        localStorage.setItem(key, stringifyData(newData));
        return newData;
    }
    console.error("I cannot keep data on local db");
};

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
// Data validation utilities
const routineValidation = (data) => {


}

//update data
const updateLocalDb = (key, updatedData) => {
    localStorage.setItem(key, JSON.stringify(updatedData));
};

export { putDataInLocalDb, getDataFromLocalDb, updateLocalDb }; 
