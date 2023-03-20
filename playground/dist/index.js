"use strict";
/*
  The public Modifier
  - public/private > only exists in TS
  - default is public

*/
class Player {
    constructor(first, last) {
        this.score = 0; // add public to make it more clear
        this.numLives = 10;
        this.first = first;
        this.last = last;
    }
}
const elton = new Player('Elton', 'Steele');
console.log(elton.first); // though readonly, we still can access > just cannot change
