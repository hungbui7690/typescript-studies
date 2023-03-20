/*
  JS - Setters

*/

class Player {
  #score = 9
  numLives = 10

  constructor(first, last) {
    this.first = first
    this.last = last
    this.#secret()
  }

  get fullName() {
    return `${this.first} ${this.last}`
  }
  get score() {
    return this.#score
  }

  // (***) setters
  set score(newScore) {
    if (newScore < 0) throw new Error('Score must be positive!')
    this.#score = newScore
  }
  set fullName(newName) {
    const [first, last] = newName.split(' ')

    this.first = first
    this.last = last
  }

  getScore() {
    return this.#score
  }
  setScore(newScore) {
    this.#score = newScore
  }
  taunt() {
    console.log('Booya!!')
  }
  loseLife() {
    this.numLives--
  }
  #secret() {
    console.log('SECRET')
  }
}

const player = new Player('Bic', 'Babon')

player.score = 34635 // (***)
console.log(player.score)

player.fullName = 'Amy Adams' // (***)
console.log(player.fullName)

console.log(player)
