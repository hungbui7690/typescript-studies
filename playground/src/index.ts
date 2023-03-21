/*
  Another Example Of A BuiltIn Generic P1
  - create an input in index.html

*/

// hover querySelector()
const inputEl = document.querySelector<HTMLInputElement>('#username')!
console.dir(inputEl)

inputEl.value = 'Hack'
