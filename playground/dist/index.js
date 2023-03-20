"use strict";
/*
  Getters and Setters
  
*/
class Player {
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
        this.numLives = 99;
    }
    // (***) similar to JS
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    // (***) setter
    set score(newScore) {
        if (newScore < 0)
            throw new Error('Score must be positive');
        this._score = newScore;
    }
    secretMethod() {
        console.log('secret!!');
    }
}
const elton = new Player('Elton', 'Steele', 100);
console.log(elton.fullName); // (***)
elton.score = 199; // (***)
console.log(elton.score);
