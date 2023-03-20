/*
  Type Narrowing w Union Types P1
  - 

*/

function printAge(age: number | string) {
  console.log(`You are ${age} years old`)
}

printAge(23)
printAge('27')
