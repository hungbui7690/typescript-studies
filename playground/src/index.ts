/*
  Class Fields In TypeScript
  - score & numLives in previous chapter

*/

class Player {
  first: string
  last: string

  // (***)
  score: number = 0
  numLives: number = 10

  constructor(first: string, last: string) {
    this.first = first
    this.last = last
  }
}

const elton = new Player('Elton', 'Steele')
console.log(elton)

// (***)
elton.score = 1000
