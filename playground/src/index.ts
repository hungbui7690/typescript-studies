/*
  Type Assertions P1
  - pic
  - we tell TS that we know this one better than you 


*/

const btn = document.querySelector('.btn')!

btn.addEventListener('click', () => {
  alert('CLICK !!!')
})

//////////////////////////////////////////

let mystery: unknown = 'Hello World !!'

const len = mystery.length // complain
