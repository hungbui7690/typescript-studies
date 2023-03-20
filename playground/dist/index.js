"use strict";
/*
  Working With Events P2

*/
const form = document.querySelector('form');
const btn = document.querySelector('.btn');
const input = document.getElementById('todo-input');
// (1) when we move the callback function out, TS knows nothing about "e"
function handleSubmit(e) {
    e.preventDefault();
    console.log('SUBMIT !!!');
}
// (2)
form.addEventListener('submit', handleSubmit);
