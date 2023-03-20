/*
  Introducing Tuples
  - pic
  - fixed length, fixed order (first item must be string, 2nd item must be boolean...)

*/

// array of multiple type
const stuff: (string | number)[] = [1, 'joe', 'nick', 4]

// if we want to have an array that represent RBG color > must have exact 3 items in the array > tuple
let color: [number, number, number] = [0, 233, 255]
color = [0, 0, 255, 0] // 4 elements > complain
