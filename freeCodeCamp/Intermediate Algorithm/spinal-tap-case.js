function spinalCase(str) {
    str = str.replace(/[_\s]/g, "-");

  // Insert a hyphen between a lowercase and an uppercase letter
  str = str.replace(/([a-z])([A-Z])/g, "$1-$2");

  // Convert the string to lowercase
  str = str.toLowerCase();

  return str
  }

spinalCase('This Is Spinal Tap');
console.log(spinalCase('This Is Spinal Tap'))
console.log(spinalCase("The_Andy_Griffith_Show"))