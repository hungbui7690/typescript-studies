/*
  Connecting to LocalStorage P1

*/

interface Todo {
  text: string
  completed: boolean
}

const todos: Todo[] = readTodos() // (3)

const form = document.querySelector('form')!
const btn = document.querySelector('.btn')! as HTMLButtonElement
const input = document.getElementById('todo-input')! as HTMLInputElement
const list = document.querySelector('ul')

// (2)
function readTodos(): Todo[] {
  const todosJSON = localStorage.getItem('todos')
  if (!todosJSON) return []
  return JSON.parse(todosJSON)
}

function handleSubmit(e: SubmitEvent) {
  e.preventDefault()

  if (!input.value) return
  const newTodo = { text: input.value, completed: false }

  createTodo(newTodo)
  localStorage.setItem('todos', JSON.stringify(todos)) // (1)
  todos.push(newTodo)
}

form.addEventListener('submit', handleSubmit)

function createTodo(todo: Todo) {
  // create element
  const newLI = document.createElement('li')
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  newLI.textContent = todo.text

  // add element
  newLI.append(checkbox)
  list?.append(newLI)

  // reset
  input.value = ''
}
