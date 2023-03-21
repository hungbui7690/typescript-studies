"use strict";
/*
  Typeof Guards P2

*/
function triple(value) {
    if (typeof value === 'string') {
        return value.repeat(3);
    }
    return value * 3;
}
