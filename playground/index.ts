/*
  Interface Methods P1
  
*/

interface Person {
  readonly id: number
  first: string
  last: string
  nickName?: string

  // sayHi is a method, and must return string
  sayHi: () => string
}

const john: Person = {
  id: 4542,
  first: 'John',
  last: 'Hardy',
  nickName: 'J',

  // use here
  sayHi: function () {
    return `Hello!`
  },
}
