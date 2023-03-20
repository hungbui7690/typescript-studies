/*
  Parameter Properties Shorthand P3
  
*/

class Player {
  private numLives: number = 99

  // (***) add private score
  constructor(
    public first: string,
    public last: string,
    private score: number
  ) {}

  private secretMethod(): void {
    console.log('secret!!')
  }
}

const elton = new Player('Elton', 'Steele', 100)
console.log(elton)
