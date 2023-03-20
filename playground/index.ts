/*
  Union Types and Arrays P1
  - we want array to hold multiple type 

*/

const stuff: any[] = [1, 2, 'jun', false] // we want to avoid any as much as possible

// the correct way > hold number and string at the same time
const thing: (number | string)[] = [1, 2, 3, 'jc']

// with this definition, array can be either all numbers or strings
const x: number[] | string[] = [1, 2, 'jc']
