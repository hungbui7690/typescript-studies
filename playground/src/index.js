/*
  JS - Private Fields P1
  - check oop-javascript github (Mosh)

*/

class Player {
  score = 0
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

player.score = -234234 // right now, anyone can do this
console.log(player)
