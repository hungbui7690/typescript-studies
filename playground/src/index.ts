/*
  Adding Type Constraints P1
  
*/

function merge<T, U>(obj1: T, obj2: U) {
  return {
    ...obj1,
    ...obj2,
  }
}

// right now, if we do this > no complain
const combined = merge({ name: 'nick' }, 9)
console.log(combined) // check log
