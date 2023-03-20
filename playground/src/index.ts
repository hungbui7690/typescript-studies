/*
  Getters and Setters
  
*/

class Player {
  private numLives: number = 99

  constructor(
    public first: string,
    public last: string,
    private _score: number
  ) {}

  // (***) similar to JS
  get fullName(): string {
    return `${this.first} ${this.last}`
  }
  get score(): number {
    return this._score
  }

  // (***) setter
  set score(newScore: number) {
    if (newScore < 0) throw new Error('Score must be positive')
    this._score = newScore
  }

  private secretMethod(): void {
    console.log('secret!!')
  }
}

const elton = new Player('Elton', 'Steele', 100)
console.log(elton.fullName) // (***)

elton.score = 199 // (***)
console.log(elton.score)
