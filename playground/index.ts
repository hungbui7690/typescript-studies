/*
  The Never Type
  - pic: functions-never-type
  - function should never return 
    + function may throw exception > no return 
    + function can continuously runs in some sort of loops > never finishes 
    > both functions above never have a chance to return anything 

  (***) compare to void > void is technically a value > void in TS actually return "undefined" 

*/

// case 1
function makeError(msg: string): never {
  throw new Error(msg)
}

// case 2
function gameLoop(): never {
  while (true) {
    console.log('Game Loop is running...')
  }
}
