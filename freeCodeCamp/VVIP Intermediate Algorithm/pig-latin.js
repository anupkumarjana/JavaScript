/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.


Tests
Passed:translatePigLatin("california") should return the string aliforniacay.
Passed:translatePigLatin("paragraphs") should return the string aragraphspay.
Passed:translatePigLatin("glove") should return the string oveglay.
Passed:translatePigLatin("algorithm") should return the string algorithmway.
Passed:translatePigLatin("eight") should return the string eightway.
Passed:Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return the string artzschway.
Passed:Should handle words without vowels. translatePigLatin("rhythm") should return the string rhythmay.
*/


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