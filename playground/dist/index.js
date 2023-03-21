"use strict";
/*
  Writing Our First Generic P3

*/
// generic type === <Type> === <genericType> === <T>
// can we use any letter or word we want, but the convention is using <T>
function identity(item) {
    return item;
}
identity(7);
identity('hello');
identity({ name: 'Bic', breed: 'English Short Hair' });
