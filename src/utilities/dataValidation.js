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
const getRoutineDataFromLocalDb = (index) => {
    const data = getDataFromLocalDb('routines')[index]
    return new Promise((resolve, reject) => {
        let creatingData = {}
        let basicInfoKey = ["institute", "department", "semester", "shift", "section", "_id"]
        const { data: basicInfo, error: basicInfoError } = checkTypeString(data, basicInfoKey);

        creatingData = { ...creatingData, ...basicInfo }

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
    const allPromise = getDataFromLocalDb('routines')?.map((single, i) => getRoutineDataFromLocalDb(i))
    return Promise.all(allPromise);

}

export { getRoutineDataFromLocalDb, getAllRoutinesFromLocalDb }