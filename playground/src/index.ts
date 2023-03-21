/*
  Adding Type Constraints P2
  
*/

// extends
function merge<T extends object, U extends object>(obj1: T, obj2: U) {
  return {
    ...obj1,
    ...obj2,
  }
}

const combined = merge({ name: 'nick' }, { age: 34 })

const combinedX = merge({ name: 'nick' }, 9) // complain
