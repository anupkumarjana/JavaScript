// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

const calculateTriangleArea = (side1, side2, side3) => {
  const surface = (side1 + side2 + side3) / 2;

  const area = Math.sqrt(
    surface * (surface - side1) * (surface - side2) * (surface - side3)
  );
  return area;
};

// console.log(area);

console.log(calculateTriangleArea(5, 6, 7));
