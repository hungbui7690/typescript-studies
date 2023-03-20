/*
  JS - Class Fields P1
  - nowadays, we don't use this way > next lecture

*/

class Player {
  constructor(first, last) {
    this.first = first
    this.last = last

    // (***) traditional way
    this.score = 0
    this.numLives = 10
  }

  taunt() {
    console.log('Booya!!')
  }
}

const player = new Player('Bic', 'Babon')
player.taunt()
console.log(player.first)
console.log(player.last)
