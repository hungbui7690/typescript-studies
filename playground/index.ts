/*
  Readonly and Optional Interface Properties
  
*/

interface Person {
  readonly id: number // readonly
  first: string
  last: string
  nickName?: string // optional
}

const john: Person = {
  id: 4542,
  first: 'John',
  last: 'Hardy',
  nickName: 'J',
}
