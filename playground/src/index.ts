/*
  The public Modifier
  - public/private > only exists in TS
  - default is public

*/

class Player {
  public readonly first: string
  public readonly last: string

  public score: number = 0 // add public to make it more clear
  numLives: number = 10

  constructor(first: string, last: string) {
    this.first = first
    this.last = last
  }
}

const elton = new Player('Elton', 'Steele')

console.log(elton.first) // though readonly, we still can access > just cannot change
