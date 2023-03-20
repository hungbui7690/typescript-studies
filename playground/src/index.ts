/*
  Parameter Properties Shorthand P2
  

*/

class Player {
  private score: number = 0

  // (***) only 1 line
  constructor(public first: string, public last: string) {}

  private secretMethod(): void {
    console.log('secret!!')
  }
}

const elton = new Player('Elton', 'Steele')
console.log(elton)
