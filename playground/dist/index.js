"use strict";
/*
  Classes and Interfaces P3
  
*/
class Bike {
    constructor(color) {
        this.color = color;
    }
}
const bike = new Bike('red');
// (***)
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.brand} - ${this.color}`);
    } // (***)
}
const jacket = new Jacket('Prada', 'black');
