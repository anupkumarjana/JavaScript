// // Setup
// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   contacts.map((contact) => {
//     if (contact[name] === contact.firstName && contact.hasOwnProperty(prop)) {
//       return contact[name][prop];
//     }
//     console.log(contact.firstName)

//     if (contact[name] !== contact.firstName) {
//       return "No such contact";
//     }
//     if (!contact.hasOwnProperty(prop)) {
//       return "No such property";
//     }
//   });
//   // Only change code above this line
// }

// let a =lookUpProfile("Akira", "likes");
// console.log(a);


// function fact(n){
//     if (n<=1){
//         return 1
//     }
//     return fact(n-1)*n
// }

// console.log(fact(6));




function checkScope() {
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

checkScope()