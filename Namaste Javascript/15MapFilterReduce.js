// // Map

const arr = [1, 2, 3, 4, 5];

const double = (element) => {
  return element * 2;
};
const tripple = (element) => {
  return element * 3;
};

const outputDouble = arr.map(double);
const outputTriple = arr.map(tripple);

console.log(outputDouble);
console.log(outputTriple);

const outputBinary = arr.map((element) => {
  return element.toString(2);
});

console.log(outputBinary);

// // Filter

// find out the odd values

const array = [12, 34, 55, 87, 56, 43];

const oddArray = array.filter((element) => element % 2 != 0);
const evenArray = array.filter((element) => element % 2 === 0);
const greaterThanThirty = array.filter((element) => element > 30);

console.log(oddArray);
console.log(evenArray);
console.log(greaterThanThirty);

// // Reduce

const list = [12, 34, 55, 87, 56, 43];

const sumOfList = list.reduce((accumulator, current) => {
  return (accumulator += current);
}, 0);

console.log(sumOfList);

// find the max value of the array

const maxi = list.reduce((max, curr) => {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);

console.log(maxi);

// // ------------------------------------------------------------------

const users = [
  { firstName: "Anup", lastName: "Jana", gender: "male", age: 25 },
  { firstName: "Arpita", lastName: "Biswas", gender: "female", age: 25 },
  { firstName: "Swarup", lastName: "Jana", gender: "male", age: 22 },
  { firstName: "Gargi", lastName: "Mosha", gender: "female", age: 17 },
  { firstName: "Irani", lastName: "Chowdhury", gender: "female", age: 17 },
];

// * get the full name of every user

const fullName = users.map((user) => user.firstName + " " + user.lastName);
console.log(fullName);

// // get user firstName who have age below 20

const belowTwentyUsers = users
  .filter((user) => user.age < 20)
  .map((user) => user.firstName);


console.log(belowTwentyUsers);

// // get the count of ages {17:2, 25:2, 22:1}

const countAges = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] += 1;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(countAges);

// // Get the user first names who have the same last name

const sameLastNameUsers = users.reduce((acc, curr) => {
  const existingUser = acc.find((user) => user.lastName === curr.lastName);
  if (existingUser) {
    existingUser.firstNames.push(curr.firstName);
  } else {
    acc.push({ lastName: curr.lastName, firstNames: [curr.firstName] });
  }
  return acc;
}, []);
console.log("Users with the Same Last Name:", sameLastNameUsers);


// // Sort the users by age

const sortedUsersByAge = users.sort((a, b) => a.age - b.age);
console.log("Sorted Users by Age:", sortedUsersByAge);


// // Get the user who has the same number of letters in the first name

const sameLetterCountUsers = users.filter((user) => {
  const firstNameLength = user.firstName.length;
  return users.some((u) => u.firstName.length === firstNameLength && u !== user);
});
console.log("Users with the Same Letter Count in First Name:", sameLetterCountUsers);

// // Get the users separated by gender

const maleUsers = users.filter((user) => user.gender === "male");
const femaleUsers = users.filter((user) => user.gender === "female");
console.log("Male Users:", maleUsers);
console.log("Female Users:", femaleUsers);


