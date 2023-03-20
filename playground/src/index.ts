/*
  TypeScripts NonNull Assertion Operator P2
  - we have couple of solutions: 
    + Method 1: optional chaining > btn?.addEventListener()
    + Method 2: NonNull Assertion Operator
      > next lecture
  

*/

const btn = document.querySelector('.btn')

// optional chaining
btn?.addEventListener('click', () => {
  alert('CLICK !!!')
})
