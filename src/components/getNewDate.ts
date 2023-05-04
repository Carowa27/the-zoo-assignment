export const getNewDate = () => {
  let getToday = new Date();

  const year = getToday.getFullYear();
  const month = getToday.getMonth();
  const day = getToday.getDay();
  const hour = getToday.getHours();
  const minutes = getToday.getMinutes();
  const lastFed =
    year +
    "-" +
    (month < 10 ? "0" : "") +
    month +
    "-" +
    (day < 10 ? "0" : "") +
    day +
    " " +
    (hour < 10 ? "0" : "") +
    hour +
    ":" +
    (minutes < 10 ? "0" : "") +
    minutes;

  return lastFed;
};
