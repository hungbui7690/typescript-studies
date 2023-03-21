"use strict";
/*
  Generics With Multiple Types P1
  
*/
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const combined = merge({ name: 'colt' }, { pets: ['blue', 'elton'] });
console.log(combined);
