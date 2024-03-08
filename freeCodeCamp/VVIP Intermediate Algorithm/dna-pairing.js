function pairElement(str) {
  const newArr=str.split("")
  const resArray=[]
  newArr.forEach(elem=> elem==="T"? resArray.push(["T", "A"]): elem==="A"?resArray.push(["A","T"]): elem==="G"?resArray.push(["G","C"]):elem==="C"? resArray.push(["C","G"]):"")
  return resArray;
}

pairElement("GCG");
console.log(pairElement("GCG"))