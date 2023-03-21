"use strict";
/*
  Adding Type Constraints P1
  
*/
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
// right now, if we do this > no complain
const combined = merge({ name: 'nick' }, 9);
console.log(combined); // check log
