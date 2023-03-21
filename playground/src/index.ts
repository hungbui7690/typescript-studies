/*
  The Protected Modifier P2
  
*/

class Player {
  private numLives: number = 99

  constructor(
    public first: string,
    public last: string,
    protected _score: number // (***)
  ) {}

  get fullName(): string {
    return `${this.first} ${this.last}`
  }
  get score(): number {
    return this._score
  }
  set score(newScore: number) {
    if (newScore < 0) throw new Error('Score must be positive')
    this._score = newScore
  }

  private secretMethod(): void {
    console.log('secret!!')
  }
}

////////////////////////////

class SuperPlayer extends Player {
  isAdmin: boolean = true

  maxScore() {
    this._score = 99999 // (***)
  }
}

const elton = new Player('Elton', 'Steele', 100)
console.log(elton)
