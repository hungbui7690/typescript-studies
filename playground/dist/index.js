"use strict";
/*
  Creating Abstract Classes P2
  - the point of abstract class is we defined pattern that the child class must have
*/
// this is the pattern that child class must follow
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    // different than interface > super version of interface
    greet() {
        console.log('Hello');
    }
}
// must have getPay()
class FullTimeEmployee extends Employee {
    getPay() {
        return 13;
    }
}
// must have getPay()
class PartTimeEmployee extends Employee {
    getPay() {
        return 123;
    }
}
