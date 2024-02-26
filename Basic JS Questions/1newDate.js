// // 1. Write a JavaScript program to display the current day and time in the following format.
// // Sample Output : Today is : Tuesday.
// // Current time is : 10 PM : 30 : 38"
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const today = new Date().getDay();

console.log("Today is : ", days[today]);

let currentHour = new Date().getHours();

const currentMinute = new Date().getMinutes();
const currentSecond = new Date().getSeconds();
console.log(
  "Current time is : ",
  currentHour === 0
    ? currentHour + 12
    : currentHour === 12
    ? currentHour + " PM"
    : currentHour > 12
    ? currentHour - 12 + " PM"
    : currentHour + " AM",
  " : ",
  currentMinute,
  " : ",
  currentSecond
);
