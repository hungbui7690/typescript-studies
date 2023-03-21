/*
  Default Type Parameters P1
  
*/

const btn = document.querySelector('.btn') // default = Element | null

////////////////////////////////////

function makeEmptyArray<T>(): T[] {
  return []
}

const strings = makeEmptyArray<string>()

// unknown type
const strs = makeEmptyArray()
