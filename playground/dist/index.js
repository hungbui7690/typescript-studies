"use strict";
/*
  Adding Type Constraints P2
  
*/
// extends
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const combined = merge({ name: 'nick' }, { age: 34 });
const combinedX = merge({ name: 'nick' }, 9); // complain
