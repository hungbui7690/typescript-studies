/*
  Todo List Finishing Touches
  - we want to work with those checkboxes

*/

interface Todo {
  text: string
  completed: boolean
}

const todos: Todo[] = readTodos()

const form = document.querySelector('form')!
const btn = document.querySelector('.btn')! as HTMLButtonElement
const input = document.getElementById('todo-input')! as HTMLInputElement
const list = document.querySelector('ul')

// (***)
window.addEventListener('DOMContentLoaded', () => {
  todos.forEach((todo) => {
    createTodo(todo)
  })
})

function readTodos(): Todo[] {
  const todosJSON = localStorage.getItem('todos')
  if (!todosJSON) return []
  return JSON.parse(todosJSON)
}

// (***)
function saveTodos(todos: Todo[]) {
  localStorage.setItem('todos', JSON.stringify(todos))
}

function handleSubmit(e: SubmitEvent) {
  e.preventDefault()

  if (!input.value) return
  const newTodo = { text: input.value, completed: false }

  createTodo(newTodo)

  todos.push(newTodo)
  saveTodos(todos)
}

form.addEventListener('submit', handleSubmit)

function createTodo(todo: Todo) {
  // create element
  const newLI = document.createElement('li')
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.checked = todo.completed // (***)
  newLI.textContent = todo.text

  // (***)
  checkbox.addEventListener('change', () => {
    todo.completed = checkbox.checked
    saveTodos(todos)
  })

  // add element
  newLI.append(checkbox)
  list?.append(newLI)

  // reset
  input.value = ''
}
