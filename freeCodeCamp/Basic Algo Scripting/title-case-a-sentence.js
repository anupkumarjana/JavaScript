function titleCase(str) {
  const strArr= str.toLowerCase().split(" ")
  console.log(strArr)

  const wordArr=[]
  for(let i in strArr){
      let char= strArr[i].split("")
      

      char[0]=char[0].toUpperCase()

      const word=char.join("")

      wordArr.push(word)
      }
      let newStr=wordArr.join(" ")

      return newStr
  }


titleCase("I'm a little tea pot");