/*
  Creating Abstract Classes P2
  - the point of abstract class is we defined pattern that the child class must have  
*/

// this is the pattern that child class must follow
abstract class Employee {
  constructor(public first: string, public last: string) {}

  abstract getPay(): number

  // different than interface > super version of interface
  greet() {
    console.log('Hello')
  }
}

// must have getPay()
class FullTimeEmployee extends Employee {
  getPay(): number {
    return 13
  }
}

// must have getPay()
class PartTimeEmployee extends Employee {
  getPay(): number {
    return 123
  }
}
