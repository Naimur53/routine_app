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

//update data
const updateLocalDb = (key, updatedData) => {
  localStorage.setItem(key, JSON.stringify(updatedData));
};

export { putDataInLocalDb, getDataFromLocalDb, updateLocalDb };
