/*
  Interface Methods P2
  
*/

interface Person {
  readonly id: number
  first: string
  last: string
  nickName?: string

  // alternative way
  sayHi(): string
}

const john: Person = {
  id: 4542,
  first: 'John',
  last: 'Hardy',
  nickName: 'J',

  sayHi: function () {
    return `Hello!`
  },
}
