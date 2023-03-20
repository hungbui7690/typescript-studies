/*
  JS - Extending Classes
  -

*/

class Player {
  static description = 'Player in our game'
  #score = 9
  numLives = 10

  constructor(first, last) {
    this.first = first
    this.last = last
    this.#secret()
  }

  static randomPlayer() {
    return new Player('Andy', 'Samberg')
  }
  get fullName() {
    return `${this.first} ${this.last}`
  }
  get score() {
    return this.#score
  }
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

///////////////////////////////////

// (***)
class AdminPlayer extends Player {
  isAdmin = true
}

const admin = new AdminPlayer()
console.log(admin)

admin.taunt()
