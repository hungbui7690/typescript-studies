/*
  Excess Properties P2
  - if we do like below, ts will only check if that object has those 2 properties or not 

*/

function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`)
}

const singer = { first: 'Mick', last: 'Jagger', age: 18 } // create an object
printName(singer) // no err now if we pass the object variable
