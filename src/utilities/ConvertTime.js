const convertToHourMinute = (date) => {
    const full = new Date(date).toLocaleTimeString().split(':').slice(0, 2);
    return full.join(":")
}
const getAmOrPm = (date) => {
    const result = new Date(date).getHours()
    return result >= 12 ? "PM" : "AM";

}
export { getAmOrPm };
export default convertToHourMinute;