// Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const currentDate = new Date().getDay();
console.log(days[currentDate]);

const currentHour = new Date().getHours();
const currentMinute = new Date().getMinutes();
const currentSecond = new Date().getSeconds();
const currentTime =
  (currentHour > 12 ? currentHour - 12 + " PM" : currentHour + " AM") +
  " : " +
  currentMinute +
  " : " +
  currentSecond;
console.log(currentTime);
