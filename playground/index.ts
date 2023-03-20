/*
  Watch Mode
  > tsc index.js --watch
  > tsc index.js -w
  
////////////////////////////////////

  Working With Multiple Files
  - create farmstand.ts
  - if we want to compile 2 files at the same time: 
    > tsc

*/

interface Chicken {
  breed: string
  eggsPerWeek: number
  name: string
  age: number
}

const norma: Chicken = {
  breed: 'Silk',
  eggsPerWeek: 4,
  name: 'Norma',
  age: 2,
}
