/*
  The private Modifier
  - #score > for ES2015

*/

class Player {
  public readonly first: string
  public readonly last: string

  private score: number = 0 // (***)

  constructor(first: string, last: string) {
    this.first = first
    this.last = last
  }

  // private method
  private secretMethod(): void {
    console.log('secret!!')
  }
}

const elton = new Player('Elton', 'Steele')
elton.secretMethod() // though TS is yelling, we still can see it works in the browser
