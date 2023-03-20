/*
  JS - Private Fields P3

*/

class Player {
  #score = 0
  numLives = 10

  constructor(first, last) {
    this.first = first
    this.last = last
    this.#secret() // call private method
  }

  // (***)
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

  // private method
  #secret() {
    console.log('SECRET')
  }
}

const player = new Player('Bic', 'Babon')
console.log(player)

// (***)
console.log(player.getScore())
player.setScore(20)
console.log(player.getScore())
