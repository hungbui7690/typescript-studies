/*
  Default Type Parameters P2
  
*/

function makeEmptyArray<T = number>(): T[] {
  return []
}

// from unknown[] to number[]
const str = makeEmptyArray()
