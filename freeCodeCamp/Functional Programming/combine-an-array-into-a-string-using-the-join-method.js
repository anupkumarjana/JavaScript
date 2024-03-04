function sentensify(str) {
  // Only change code below this line
  let newStr= str.split(/[ ,.-]/)
  return newStr.join(" ")

  // Only change code above this line
}

sentensify("May-the-force-be-with-you");
console.log(sentensify("May-the-force-be-with-you"))