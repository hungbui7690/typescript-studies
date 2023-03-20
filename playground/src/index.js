/*
  JS - Getters

*/

class Player {
  #score = 9
  numLives = 10

  constructor(first, last) {
    this.first = first
    this.last = last
    this.#secret()
  }

  // (***) need to have get keyword
  get fullName() {
    return `${this.first} ${this.last}`
  }
  get score() {
    return this.#score
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
console.log(player)

console.log(player.fullName) // (***)
console.log(player.score)
