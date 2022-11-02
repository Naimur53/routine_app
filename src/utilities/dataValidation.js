import { getDataFromLocalDb } from "./localDb";

// found error and generate data;
const checkTypeString = (data, keys) => {
    let error = {};
    let newData = {};
    keys.forEach(ele => {
        if (typeof data[ele] !== 'string') {
            newData[ele] = '';
            error[ele] = 'data not found'
        } else {
            newData[ele] = data[ele]
        }
    })
    return { data: newData, error }
}
const getRoutineDataFromLocalDbWithIndex = (index) => {
    const data = getDataFromLocalDb('routines')[index]
    return new Promise((resolve, reject) => {
        let creatingData = {}

        // basic info validate
        let basicInfoKey = ["institute", "department", "semester", "shift", "section", "_id"]

        const { data: basicInfo, error: basicInfoError } = checkTypeString(data, basicInfoKey);

        // user data validating 
        const userInfoKey = ["_id", "displayName", "email", "photoURL", "uid"]
        const { data: userInfo, error: userInfoError } = checkTypeString(data.creator, userInfoKey);

        creatingData = { ...creatingData, ...basicInfo, creator: userInfo }
        // validate total user using those 
        creatingData.totalUserUsing = typeof data.totalUserUsing !== 'number' ? data.totalUserUsing : 0;



        if (Array.isArray(data.classes)) {
            let newClasses = [];
            let singleClassError = {}
            const classKey = [
                "subjectName", "subjectCode", "teacherName", "day", "roomNumber", "startTime", "endTime"]
            data.classes.forEach(single => {
                const { data: singleClass, error } = checkTypeString(single, classKey);
                newClasses = [...newClasses, singleClass]
                singleClassError = { ...singleClassError, ...error }
            })
            creatingData.classes = newClasses;
            if (Object.keys(singleClassError)?.length >= 5) {
                reject({
                    error: 'multiple key of single class info are in wrong type',
                    message: 'Error while getting data try to Re-save your routine'
                })

            }
        } else {
            reject({
                error: 'routine classes is not a array, only expect array',
                message: 'Error while getting data try to Re-save your routine'
            })
        }

        // action
        if (Object.keys(basicInfoError)?.length >= 2) {
            reject({
                error: 'multiple key of basic info are in wrong type',
                message: 'Error while getting data try to Re-save your routine'
            })
        }
        resolve(creatingData)
    })
}

// get all routine
const getAllRoutinesFromLocalDb = () => {
    const allPromise = getDataFromLocalDb('routines')?.map((single, i) => getRoutineDataFromLocalDbWithIndex(i))
    return Promise.all(allPromise);

}

export { getRoutineDataFromLocalDbWithIndex, getAllRoutinesFromLocalDb }