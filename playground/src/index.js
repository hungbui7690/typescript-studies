/*
  JS - Private Fields P2
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields

  
*/

class Player {
  #score = 0 // private field
  numLives = 10

  constructor(first, last) {
    this.first = first
    this.last = last
  }

  taunt() {
    console.log('Booya!!')
  }
  loseLife() {
    this.numLives--
  }
}

const player = new Player('Bic', 'Babon')

player.#score = -234234 // we cannot access this field anymore
console.log(player)
