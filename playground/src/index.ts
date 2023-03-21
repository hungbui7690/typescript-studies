/*
  Generics With Multiple Types P2
  
*/

// <T,U> : hover
function merge<T, U>(obj1: T, obj2: U) {
  return {
    ...obj1,
    ...obj2,
  }
}

const combined = merge({ name: 'colt' }, { pets: ['blue', 'elton'] })
console.log(combined)
