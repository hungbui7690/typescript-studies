"use strict";
/*
  Todo List Finishing Touches
  - we want to work with those checkboxes

*/
const todos = readTodos();
const form = document.querySelector('form');
const btn = document.querySelector('.btn');
const input = document.getElementById('todo-input');
const list = document.querySelector('ul');
// (***)
window.addEventListener('DOMContentLoaded', () => {
    todos.forEach((todo) => {
        createTodo(todo);
    });
});
function readTodos() {
    const todosJSON = localStorage.getItem('todos');
    if (!todosJSON)
        return [];
    return JSON.parse(todosJSON);
}
// (***)
function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}
function handleSubmit(e) {
    e.preventDefault();
    if (!input.value)
        return;
    const newTodo = { text: input.value, completed: false };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos(todos);
}
form.addEventListener('submit', handleSubmit);
function createTodo(todo) {
    // create element
    const newLI = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed; // (***)
    newLI.textContent = todo.text;
    // (***)
    checkbox.addEventListener('change', () => {
        todo.completed = checkbox.checked;
        saveTodos(todos);
    });
    // add element
    newLI.append(checkbox);
    list === null || list === void 0 ? void 0 : list.append(newLI);
    // reset
    input.value = '';
}
