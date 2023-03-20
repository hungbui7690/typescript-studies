/*
  JS - Constructors P2

*/

class Player {
  // add property
  constructor(first, last) {
    this.first = first
    this.last = last
  }

  taunt() {
    console.log('Booya!!')
  }
}

// use here
const player = new Player('Bic', 'Babon')
player.taunt()

// log
console.log(player.first)
console.log(player.last)
