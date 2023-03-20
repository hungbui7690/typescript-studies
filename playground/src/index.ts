/*
  Working With Events P1
  - index.html > add form

*/

const form = document.querySelector('form')! // (1) when we use element selector > TS knows right away this is a form > hover
const btn = document.querySelector('.btn')! as HTMLButtonElement
const input = document.getElementById('todo-input')! as HTMLInputElement

// (2)
form.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log('SUBMIT !!!')
})
