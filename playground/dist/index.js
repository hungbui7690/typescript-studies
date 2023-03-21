"use strict";
/*
  Adding Type Constraints P3
  
*/
function printDoubleLength(thing) {
    return thing.length * 2;
}
printDoubleLength('hello');
printDoubleLength(4);
////////////////////////////////////
// (***) we also can re-write this function without using Generic Type
function printDoubleLengthX(thing) {
    return thing.length * 2;
}
