"use strict";
/*
  Equality Narrowing

*/
// the only way for x === y is to have the same type and same value > equality narrowing
function someDemo(x, y) {
    if (x === y) {
        return;
    }
}
