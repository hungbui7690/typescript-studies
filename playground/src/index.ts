/*
  Adding Type Constraints P3
  
*/

interface Lengthy {
  length: number
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
  return thing.length * 2
}

printDoubleLength('hello')
printDoubleLength(4)

////////////////////////////////////

// (***) we also can re-write this function without using Generic Type
function printDoubleLengthX(thing: Lengthy): number {
  return thing.length * 2
}
