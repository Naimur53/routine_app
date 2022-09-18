const convertToHourMinute = (date) => {
    const full = new Date(date).toLocaleTimeString().split(':').slice(0, 2);
    return full.join(":")
}
export default convertToHourMinute;