/*
  JS - Constructors P1

*/

class Player {
  // (***) will be call every time we instantiate a new instance
  constructor() {
    console.log('CONSTRUCTOR')
  }

  taunt() {
    console.log('Booya!!')
  }
}

const player1 = new Player()
player1.taunt()

const player2 = new Player()
player2.taunt()
