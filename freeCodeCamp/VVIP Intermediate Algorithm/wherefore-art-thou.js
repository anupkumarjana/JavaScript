function whatIsInAName(collection, source) {
  return collection.filter(item => {
    for (let key in source) {
      if (!item.hasOwnProperty(key) || item[key] !== source[key]) {
        return false;
      }
    }
    return true;
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });