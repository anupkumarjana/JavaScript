// * A function which takes a functions as an argument or returns a function is called Hiher order funtions.

// * Which fucntion is used as an argument, is a Callback function

// this is the callback function
function x() {
  console.log("hi");
}

// this is the higher order function
function y(x) {
  x();
}

// calculate the total area of all circles

const radius = [2, 4, 5, 6];

const areaFormula = (r) => {
  return 4 * 3.14 * r * r;
};
const circumferenceFormula = (r) => {
  return 2 * 3.14 * r;
};
const diameterFormula = (r) => {
  return 2 * r;
};

let area = radius.map((r) => areaFormula(r));
let circumference = radius.map((r) => circumferenceFormula(r));
let diameter = radius.map((r) => diameterFormula(r));

console.log(area);
console.log(circumference);
console.log(diameter);

// ! -------------------------------------------------------

// * this is a higher order fucntions

const calculateValues = (radiusArray, logicFunction) => {
  return radiusArray.map((r) => logicFunction(r));
};

// * these are call back fucntions
const areaFormula1 = (r) => {
  return 4 * 3.14 * r * r;
};

const circumferenceFormula1 = (r) => {
  return 2 * 3.14 * r;
};

const diameterFormula1 = (r) => {
  return 2 * r;
};

const radius1 = [2, 4, 5, 6];

let area1 = calculateValues(radius, areaFormula);
let circumference1 = calculateValues(radius, circumferenceFormula);
let diameter1 = calculateValues(radius, diameterFormula);

console.log("Radius:", radius);
console.log("Area:", area);
console.log("Circumference:", circumference);
console.log("Diameter:", diameter);
