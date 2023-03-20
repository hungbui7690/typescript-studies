"use strict";
/*
  readonly Class Properties

*/
class Player {
    constructor(first, last) {
        this.score = 0;
        this.numLives = 10;
        this.first = first;
        this.last = last;
    }
}
const elton = new Player('Elton', 'Steele');
elton.first = 'bic';
