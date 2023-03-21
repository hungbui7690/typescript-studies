/*
  Generics With Multiple Types P1
  
*/

function merge(obj1, obj2) {
  return {
    ...obj1,
    ...obj2,
  }
}

const combined = merge({ name: 'colt' }, { pets: ['blue', 'elton'] })
console.log(combined)
