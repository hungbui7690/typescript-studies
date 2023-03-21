/*
  Classes and Interfaces P1
  
*/

interface Colorful {
  color: string
}

// (***) use "implements" keyword
class Bike implements Colorful {
  constructor(public color: string) {}
}

const bike = new Bike('red')
