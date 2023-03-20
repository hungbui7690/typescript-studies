/*
  Working With Events P3

*/

const form = document.querySelector('form')!
const btn = document.querySelector('.btn')! as HTMLButtonElement
const input = document.getElementById('todo-input')! as HTMLInputElement

// we tell TS that e === Event or SubmitEvent
function handleSubmit(e: SubmitEvent) {
  e.preventDefault()
  console.log('SUBMIT !!!')
}

form.addEventListener('submit', handleSubmit)
