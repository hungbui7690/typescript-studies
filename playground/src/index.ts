/*
  TypeScripts NonNull Assertion Operator P3
    + Method 2: NonNull Assertion Operator
      > next lecture
  
*/

// add ! at the end > tell TS that we guarantee this is not null > not recommended
const btn = document.querySelector('.btn')!

// we can remove optional chaining
btn.addEventListener('click', () => {
  alert('CLICK !!!')
})
