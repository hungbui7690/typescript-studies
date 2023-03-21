"use strict";
/*
  Typeof Guards P1
  - pic
  - narrow to precise type
    > ex: union to more precise type


*/
// we can't do either of these
function triple(value) {
    return value * 3; // string cannot do this
    return value.repeat(3); // number cannot do this
}
