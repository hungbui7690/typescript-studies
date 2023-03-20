/*
  Type Assertions With the DOM P2
  - alternative way to declare type assertion > this way is hard to read 

*/

const btn = document.querySelector('.btn')! as HTMLButtonElement

// remove type assertion
const input = document.getElementById('todo-input')!

btn.addEventListener('click', () => {
  alert((<HTMLInputElement>input).value) // use here > need to be in parenthesis
})
