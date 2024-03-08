const Person = function(first, last) {
  // Check if the object is instantiated correctly
  if (!(this instanceof Person)) {
    return new Person(first, last);
  }

  // Private variables to store first and last names
  let firstName = first;
  let lastName = last;

  // Methods to get first, last, and full names
  this.getFirstName = function() {
    return firstName;
  };
  
  this.getLastName = function() {
    return lastName;
  };
  
  this.getFullName = function() {
    return firstName + " " + lastName;
  };

  // Methods to set first, last, and full names
  this.setFirstName = function(fName) {
    firstName = fName;
  };
  
  this.setLastName = function(lName) {
    lastName = lName;
  };
  
  this.setFullName = function(fName, lName) {
    firstName = fName;
    lastName = lName;
  };
};

// Test instantiation
const bobRoss = new Person('Bob', 'Ross');

// Testing methods
console.log(bobRoss.getFirstName()); // Output: Bob
console.log(bobRoss.getLastName()); // Output: Ross
console.log(bobRoss.getFullName()); // Output: Bob Ross
bobRoss.setFirstName('Haskell');
console.log(bobRoss.getFullName()); // Output: Haskell Ross
bobRoss.setLastName('Curry');
console.log(bobRoss.getFullName()); // Output: Haskell Curry
bobRoss.setFullName('Emily Martinez', 'de la Rosa');
console.log(bobRoss.getFullName()); // Output: Emily Martinez de la Rosa
console.log(bobRoss.getFirstName()); // Output: Emily Martinez
console.log(bobRoss.getLastName()); // Output: de la Rosa
