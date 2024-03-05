function pairElement(str) {
  // const newArr=str.split("")
  // const resArray=[]
  // newArr.forEach(elem=> elem==="T"? resArray.push(["T", "A"]): elem==="A"?resArray.push(["A","T"]): elem==="G"?resArray.push(["G","C"]):elem==="C"? resArray.push(["C","G"]):"")
  // return resArray;
  const pairings = { T: "A", A: "T", G: "C", C: "G" };

  return str.split("").map(elem => [elem, pairings[elem]]);
}

pairElement("GCG");
console.log(pairElement("GCG"))