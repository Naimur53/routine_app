
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
const getRoutineDataFromLocalDb = () => {
    const data = {
        classes: [
            {
                subjectName: 21312,
                subjectCode: 23232,
                day: 23232,
                roomNumber: 4343,
                startTime: 324,
                endTime: "Thu Sep 29 2022 04:00:00 GMT+0600 (Bangladesh Standard Time)"
            }
        ],
        institute: 121212,
        department: 1212,
        semester: "1st",
        shift: "dfdff",
        section: "dfd"
    }
    return new Promise((resolve, reject) => {
        let creatingData = {}
        let basicInfoKey = ["institute", "department", "semester", "shift", "section"]
        const { data: basicInfo, error: basicInfoError } = checkTypeString(data, basicInfoKey);
        creatingData = { ...creatingData, ...basicInfo }

        if (Array.isArray(data.classes)) {
            let newClasses = [];
            let singleClassError = {}
            const classKey = [
                "subjectName", "subjectCode", "teacherName", "day", "roomNumber", "startTime"]
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
        resolve({ data: creatingData })
    })
}
export { getRoutineDataFromLocalDb }