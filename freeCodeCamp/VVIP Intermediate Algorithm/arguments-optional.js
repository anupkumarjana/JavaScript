function addTogether(...args) {
  if(args.some(arg=> typeof arg !=='number')){
    return undefined
  }
  if(args.length===2){
    return args[0]+args[1]
  }
  else if(args.length===1){
    //  const firstArg = args[0];
    return function(secondArg){
      return typeof secondArg==='number'? args[0]+secondArg: undefined
    }
  }

return undefined
 
  // return args.reduce((acc, val)=> Number.isNaN(val)? acc=undefined: acc+=val ,0)
}

addTogether(2,3);
console.log(addTogether(2,3))
console.log(addTogether("2", 3))