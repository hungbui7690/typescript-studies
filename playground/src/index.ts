/*
  Parameter Properties Shorthand P1
  

*/

class Player {
  // (1)
  readonly first: string
  readonly last: string

  private score: number = 0

  // (2)
  constructor(first: string, last: string) {
    // (3) total 3 steps to setup constructor
    this.first = first
    this.last = last
  }

  private secretMethod(): void {
    console.log('secret!!')
  }
}

const elton = new Player('Elton', 'Steele')
