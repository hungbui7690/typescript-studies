/*
  Classes and Interfaces P3
  
*/

interface Colorful {
  color: string
}

// (***)
interface Printable {
  print(): void
}

class Bike implements Colorful {
  constructor(public color: string) {}
}
const bike = new Bike('red')

// (***)
class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}

  print(): void {
    console.log(`${this.brand} - ${this.color}`)
  } // (***)
}

const jacket = new Jacket('Prada', 'black')
