/*
  Function Parameter Annotations P1
  - pic

*/

function square(num) {
  num.toUpperCase() // invalid
  num() // invalid
  return num * num
}

square(3)
square(true) // invalid
square('hello') // invalid
