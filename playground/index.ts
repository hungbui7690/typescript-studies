/*
  Working With Object Types

*/

const dog = {
  name: 'Elton',
  breed: 'Australian Shepherd',
  age: 0.5,
}

// function accepts object as parameter
function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`)
}

printName({ first: 'Thomas', last: 'Jenkins' })
