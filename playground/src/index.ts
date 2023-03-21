/*
  Equality Narrowing

*/

// the only way for x === y is to have the same type and same value > equality narrowing
function someDemo(x: string | number, y: string | number) {
  if (x === y) {
    return
  }
}
