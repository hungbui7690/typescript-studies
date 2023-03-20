"use strict";
/*
  Working With Events P3

*/
const form = document.querySelector('form');
const btn = document.querySelector('.btn');
const input = document.getElementById('todo-input');
// we tell TS that e === Event or SubmitEvent
function handleSubmit(e) {
    e.preventDefault();
    console.log('SUBMIT !!!');
}
form.addEventListener('submit', handleSubmit);
