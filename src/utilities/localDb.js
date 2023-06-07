//default function
const parseData = (data) => {

    let mainData;
    try {
        mainData = JSON.parse(data);
    } catch {
        console.error('This data is not valid for parse i have return as it was', data)
        return data;
    }
    return mainData;
};

const stringifyData = (data) => {
    return JSON.stringify(data);
};
// new const  localBb={key:'value'};

// get data. myNotes;
const getDataFromLocalDb = (key, type) => {
    const value = parseData(localStorage.getItem(key));
    if (!value && type === 'num') {
        localStorage.setItem(key, stringifyData(0));
        return 0;
    }
    if (type === 'num' && typeof value !== 'number') {
        localStorage.setItem(key, stringifyData(0));
        return 0
    }
    if (!value) {
        localStorage.setItem(key, stringifyData([]));
        return [];
    }


    return value;
};
const postNumberInLocalDb = (key, data) => {
    if (typeof data !== undefined) {
        localStorage.setItem(key, stringifyData(data))
        return data;
    }
    console.error("I cannot keep data on local db");
    return null;

}
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
const deleteOneRoutine = (_id) => {
    const beforeData = getDataFromLocalDb('routines');
    const filter = beforeData.filter(single => single._id !== _id);
    localStorage.setItem('routines', stringifyData(filter));

}
const saveRoutine = (data) => {
    const beforeSavedData = getDataFromLocalDb("routines")
    const exist = beforeSavedData.find(single => single._id === data._id);
    if (!data?._id) {
        return { response: 'Something is wrong while save data', status: 400 }
    }
    if (!exist) {
        putDataInLocalDb('routines', data, true)
        return { response: 'Routine successfully save', status: 200 }
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
// selected index 

const findSelectIndex = () => {
    return getDataFromLocalDb('selectedIndex', 'num')
}
const saveSelectIndex = (value) => {
    return postNumberInLocalDb('selectedIndex', value)
}
export { putDataInLocalDb, getDataFromLocalDb, updateLocalDb, saveRoutine, deleteOneRoutine, saveSelectIndex, findSelectIndex }; 
