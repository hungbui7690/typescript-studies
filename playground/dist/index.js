"use strict";
/*
  Type Assertions P2

*/
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    alert('CLICK !!!');
});
//////////////////////////////////////////
// we assume that TS does not know anything about this variable at runtime > unknown
let mystery = 'Hello World !!';
const len = mystery.length; // (***) type assertion === as > we tell TS that we clearly know that this is string
