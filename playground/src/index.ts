/*
  Classes and Interfaces P2
  
*/

interface Colorful {
  color: string
}

class Bike implements Colorful {
  constructor(public color: string) {}
}
const bike = new Bike('red')

// (***)
class Jacket implements Colorful {
  constructor(public brand: string, public color: string) {}
}
const jacket = new Jacket('Prada', 'black') // (***)
