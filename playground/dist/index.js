"use strict";
/*
  Building The Todo List P2
  - we want to add a checkbox next to each todo

*/
const form = document.querySelector('form');
const btn = document.querySelector('.btn');
const input = document.getElementById('todo-input');
const list = document.querySelector('ul');
function handleSubmit(e) {
    e.preventDefault();
    const newToto = input.value;
    const newLI = document.createElement('li');
    const checkbox = document.createElement('input'); // (1)
    checkbox.type = 'checkbox';
    newLI.textContent = newToto;
    newLI.append(checkbox); // (2)
    list === null || list === void 0 ? void 0 : list.append(newLI);
    input.value = '';
}
form.addEventListener('submit', handleSubmit);
