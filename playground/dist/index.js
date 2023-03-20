"use strict";
/*
  The private Modifier
  - #score > for ES2015

*/
class Player {
    constructor(first, last) {
        this.score = 0; // (***)
        this.first = first;
        this.last = last;
    }
    // private method
    secretMethod() {
        console.log('secret!!');
    }
}
const elton = new Player('Elton', 'Steele');
elton.secretMethod(); // though TS is yelling, we still can see it works in the browser
