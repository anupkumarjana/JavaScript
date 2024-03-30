// // Problem Statement

/* 
Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Tests
Passed:pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
Passed:pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
Passed:pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
*/

// // Solution-1
function pairElement(str) {
  const newArr = str.split("");
  const resArray = [];
  newArr.forEach((elem) =>
    elem === "T"
      ? resArray.push(["T", "A"])
      : elem === "A"
      ? resArray.push(["A", "T"])
      : elem === "G"
      ? resArray.push(["G", "C"])
      : elem === "C"
      ? resArray.push(["C", "G"])
      : ""
  );
  return resArray;
}

pairElement("GCG");
console.log(pairElement("GCG"));

// // Solution-2
function pairElement(str) {
  const strArr = str.split("");
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === "C") {
      strArr[i] = ["C", "G"];
    } else if (strArr[i] === "G") {
      strArr[i] = ["G", "C"];
    } else if (strArr[i] === "A") {
      strArr[i] = ["A", "T"];
    } else {
      strArr[i] = ["T", "A"];
    }
  }
  console.log(strArr);
  return strArr;
}

pairElement("GCG");
pairElement("ATCGA");
