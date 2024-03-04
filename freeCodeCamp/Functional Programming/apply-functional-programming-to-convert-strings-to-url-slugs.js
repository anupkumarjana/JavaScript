// Only change code below this line
function urlSlug(title) {
  let newTitle=title.trim().toLowerCase().split(/\s+/).join("-")
  return newTitle
 

}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"))