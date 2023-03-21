"use strict";
/*
  The Protected Modifier P1
  
*/
class Player {
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
        this.numLives = 99;
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0)
            throw new Error('Score must be positive');
        this._score = newScore;
    }
    secretMethod() {
        console.log('secret!!');
    }
}
////////////////////////////
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    // (***)
    maxScore() {
        this._score = 99999;
    }
}
const elton = new Player('Elton', 'Steele', 100);
console.log(elton);
