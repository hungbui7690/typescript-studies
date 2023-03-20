/*
  The Any Type
  - pic
  - does not appear in JS > does not do type checking > we try to avoid it as much as possible 

*/

// if we set the type to "any" > we can change it to any type
let thing: any = 'hello'
thing = 1
thing = false
thing()
thing.toUpperCase() // we can call any methods, and ts does not complain about it

const animal = 'dog'
animal() // complain now
