/*
  Excess Properties P1

*/

// function that has 2 params: first & last
function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`)
}

// err if we add 1 more property to the object
printName({ first: 'Mick', last: 'Jagger', age: 18 })
