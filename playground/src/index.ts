/*
  Annotating Classes In TypeScript P2

*/

// hover and read the error > then solve
class Player {
  first: string // for this.first
  last: string // for this.last

  constructor(first: string, last: string) {
    this.first = first
    this.last = last
  }
}

const elton = new Player('Elton', 'Steele')
