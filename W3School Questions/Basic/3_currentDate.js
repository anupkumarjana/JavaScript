const currentDay = new Date().getDate();
const currentMonth = new Date().getMonth() + 1;
const currentYear = new Date().getFullYear();

console.log(
  `${currentDay}-${
    currentMonth < 10 ? "0" + currentMonth : currentMonth
  }-${currentYear}`
);
console.log(
  `${currentDay}/${
    currentMonth < 10 ? "0" + currentMonth : currentMonth
  }/${currentYear}`
);
