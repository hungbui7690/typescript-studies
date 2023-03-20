/*
  Building The Todo List P1
  - index.html > add ul

*/

const form = document.querySelector('form')!
const btn = document.querySelector('.btn')! as HTMLButtonElement
const input = document.getElementById('todo-input')! as HTMLInputElement
const list = document.querySelector('ul') // (1)

function handleSubmit(e: SubmitEvent) {
  e.preventDefault()

  // (2)
  const newToto = input.value
  const newLI = document.createElement('li')
  newLI.textContent = newToto
  list?.append(newLI)
  input.value = ''
}

form.addEventListener('submit', handleSubmit)
