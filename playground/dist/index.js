"use strict";
/*
  Parameter Properties Shorthand P3
  
*/
class Player {
    // (***) add private score
    constructor(first, last, score) {
        this.first = first;
        this.last = last;
        this.score = score;
        this.numLives = 99;
    }
    secretMethod() {
        console.log('secret!!');
    }
}
const elton = new Player('Elton', 'Steele', 100);
console.log(elton);
