// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList,bookName) {
  const arr=[...bookList]
  arr.push(bookName);
  return arr;
  
  // Change code above this line
}

// Change code below this line
function remove(bookList,bookName) {
  const arr=[...bookList]
  const book_index = arr.indexOf(bookName);
  if (book_index >= 0) {

    arr.splice(book_index, 1);
    return arr;

    // Change code above this line
    }
}