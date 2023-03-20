"use strict";
/*
  Adding in an Interface
  - right now, we don't have any list or collection to store the data of todos

*/
const todos = []; // (2)
const form = document.querySelector('form');
const btn = document.querySelector('.btn');
const input = document.getElementById('todo-input');
const list = document.querySelector('ul');
function handleSubmit(e) {
    e.preventDefault();
    if (!input.value)
        return;
    // (4a)
    const newTodo = { text: input.value, completed: false };
    // (4b) we can check for todos in the console of browser
    createTodo(newTodo);
    todos.push(newTodo);
}
form.addEventListener('submit', handleSubmit);
// (3)
function createTodo(todo) {
    // create element
    const newLI = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    newLI.textContent = todo.text;
    // add element
    newLI.append(checkbox);
    list === null || list === void 0 ? void 0 : list.append(newLI);
    // reset
    input.value = '';
}
