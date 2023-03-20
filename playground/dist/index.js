"use strict";
/*
  Building The Todo List P1
  - index.html > add ul

*/
const form = document.querySelector('form');
const btn = document.querySelector('.btn');
const input = document.getElementById('todo-input');
const list = document.querySelector('ul'); // (1)
function handleSubmit(e) {
    e.preventDefault();
    // (2)
    const newToto = input.value;
    const newLI = document.createElement('li');
    newLI.textContent = newToto;
    list === null || list === void 0 ? void 0 : list.append(newLI);
    input.value = '';
}
form.addEventListener('submit', handleSubmit);
