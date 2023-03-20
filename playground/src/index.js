/*
  JS - Class Fields P2

*/

class Player {
  // (***) write here
  score = 0
  numLives = 10

  constructor(first, last) {
    this.first = first
    this.last = last
  }

  taunt() {
    console.log('Booya!!')
  }

  // (***)
  loseLife() {
    this.numLives--
  }
}

const player = new Player('Bic', 'Babon')
player.taunt()
console.log(player)

player.loseLife() // (***)
console.log(player)
