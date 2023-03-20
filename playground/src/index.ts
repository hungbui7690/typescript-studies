/*
  Strict Option P2
  - "strictNullChecks": false > allow null & undefined
    > code below

*/

interface Chicken {
  breed: string
  eggsPerWeek: number
  name: string
  age: number
}

const norma: Chicken = {
  breed: 'Silk',
  eggsPerWeek: 4,
  name: 'Norma',
  age: 2,
}

/////////////////////////

let users: string[] = ['joe', 'dan']

// (***)
users = null
users = undefined
