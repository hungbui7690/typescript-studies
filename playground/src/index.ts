/*
  Building The Todo List P2
  - we want to add a checkbox next to each todo

*/

const form = document.querySelector('form')!
const btn = document.querySelector('.btn')! as HTMLButtonElement
const input = document.getElementById('todo-input')! as HTMLInputElement
const list = document.querySelector('ul')

function handleSubmit(e: SubmitEvent) {
  e.preventDefault()

  const newToto = input.value
  const newLI = document.createElement('li')

  const checkbox = document.createElement('input') // (1)
  checkbox.type = 'checkbox'

  newLI.textContent = newToto
  newLI.append(checkbox) // (2)
  list?.append(newLI)
  input.value = ''
}

form.addEventListener('submit', handleSubmit)
