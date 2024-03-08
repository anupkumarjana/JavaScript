
function translatePigLatin(str) {
  const vowels=["a", "e", "i","o", "u"]
  
  if(vowels.includes(str.charAt(0))){
    return str+"way" 
  }  
 
    else {
    // Find the index of the first vowel in the word
    const firstVowelIndex = str.search(/[aeiou]/);

    // If there's no vowel, return the word + "ay"
    if (firstVowelIndex === -1) {
      return str + "ay";
    }

    // Move the consonants before the first vowel to the end and add "ay"
    return str.slice(firstVowelIndex) + str.slice(0, firstVowelIndex) + "ay";
  }
}

translatePigLatin("consonant");
console.log(translatePigLatin("consonant"))
console.log(translatePigLatin("algorithm"))


// const arr = str.split("")
//    let newStr;
//   if(!vowels.includes(arr[0])){
//     const fisrtConsonent=arr.shift()
//     arr.push(fisrtConsonent)
//     newStr=arr.join("")+"ay"
//   }
//   else{
//     newStr=str+"way"
//   }
//   return newStr;