// Define the Dog constructor
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

// Create a new Dog instance named terrier with specific name and color
var terrier = new Dog("Buddy", "brown");

// Accessing properties of the terrier object
console.log(terrier.name);    // Output: Buddy
console.log(terrier.color);   // Output: brown
console.log(terrier.numLegs); // Output: 4
