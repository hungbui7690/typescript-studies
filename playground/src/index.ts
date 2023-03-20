/*
  Adding in an Interface
  - right now, we don't have any list or collection to store the data of todos 

*/

// (1)
interface Todo {
  text: string
  completed: boolean
}

const todos: Todo[] = [] // (2)

const form = document.querySelector('form')!
const btn = document.querySelector('.btn')! as HTMLButtonElement
const input = document.getElementById('todo-input')! as HTMLInputElement
const list = document.querySelector('ul')

function handleSubmit(e: SubmitEvent) {
  e.preventDefault()

  if (!input.value) return

  // (4a)
  const newTodo = { text: input.value, completed: false }

  // (4b) we can check for todos in the console of browser
  createTodo(newTodo)
  todos.push(newTodo)
}

form.addEventListener('submit', handleSubmit)

// (3)
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
