/*
  JS - The Class Keyword
  - pic
  - interface: describe the shape of an object 
    > we don't initiate from interface > but we can create instance from a class

  (***) we will work with .js file in these videos 

*/

class Player {
  taunt() {
    console.log('Booya!!')
  }
}

const player1 = new Player()
player1.taunt()

const player2 = new Player()
player2.taunt()
