/*
  Strict Option P3
  - if we want to have something to be null > add to type
  - "strictNullChecks": true 
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

// add null here
let users: string[] | null = ['joe', 'dan']
users = null
