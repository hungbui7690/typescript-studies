"use strict";
/*
  Connecting to LocalStorage P1

*/
const todos = readTodos(); // (3)
const form = document.querySelector('form');
const btn = document.querySelector('.btn');
const input = document.getElementById('todo-input');
const list = document.querySelector('ul');
// (2)
function readTodos() {
    const todosJSON = localStorage.getItem('todos');
    if (!todosJSON)
        return [];
    return JSON.parse(todosJSON);
}
function handleSubmit(e) {
    e.preventDefault();
    if (!input.value)
        return;
    const newTodo = { text: input.value, completed: false };
    createTodo(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos)); // (1)
    todos.push(newTodo);
}
form.addEventListener('submit', handleSubmit);
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
