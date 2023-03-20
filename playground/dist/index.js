"use strict";
/*
  Parameter Properties Shorthand P1
  

*/
class Player {
    // (2)
    constructor(first, last) {
        this.score = 0;
        // (3) total 3 steps to setup constructor
        this.first = first;
        this.last = last;
    }
    secretMethod() {
        console.log('secret!!');
    }
}
const elton = new Player('Elton', 'Steele');
