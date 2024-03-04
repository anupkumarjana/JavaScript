Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Only change code below this line
  for(let i=0; i<this.length; i++){
    const val=callback(this[i], i, this)
    if (val){
      newArray.push(this[i])
    }
    
  }
  // Only change code above this line
  return newArray;
};