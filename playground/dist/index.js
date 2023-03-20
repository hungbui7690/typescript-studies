"use strict";
/*
  Parameter Properties Shorthand P2
  

*/
class Player {
    // (***) only 1 line
    constructor(first, last) {
        this.first = first;
        this.last = last;
        this.score = 0;
    }
    secretMethod() {
        console.log('secret!!');
    }
}
const elton = new Player('Elton', 'Steele');
console.log(elton);
