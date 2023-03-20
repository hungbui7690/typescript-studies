/*
  Intersection Types P2
  - combine types

*/

type Cat = {
  numLives: number
}

type Dog = {
  breed: string
}

// combine + add on
type CatDog = Cat &
  Dog & {
    age: number
  }

const bic = {
  numLives: 9,
  breed: 'short-hair',
  age: 4,
}
