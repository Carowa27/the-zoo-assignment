export const getNewDate = () => {
  const newDate = new Date();

  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const day = newDate.getDay();
  const hour = newDate.getHours();
  const minutes = newDate.getMinutes();
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
