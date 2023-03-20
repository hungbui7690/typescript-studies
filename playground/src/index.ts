/*
  Type Assertions With the DOM P1
  - similar, since we know better than TS in this case > we could use type assertion
  - index.html > add input

  (***)
  - ! : we tell JS this is not null
  - as HTMLInputElement: type assertion 
  > both of them have different responsibilities

*/

const btn = document.querySelector('.btn')! as HTMLButtonElement

// console.dir() > we see that this is HTMLInputElement > but TS just know this is HTMLElement > no .value property
// we use type assertion
const input = document.getElementById('todo-input')! as HTMLInputElement

btn.addEventListener('click', () => {
  alert(input.value) // now we can use input.value with no complain
})
