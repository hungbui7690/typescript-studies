/*
  TypeScripts NonNull Assertion Operator P1
  - below, we have the button selected, but what is the type of this button
    > hover: Element | null > generic type
    > console.dir(btn) > scroll to the end, we will see HtmlButtonElement
    
  

*/

// when we select, ts knows nothing about this element > it just know that we use the querySelector(str) and receive an Element or null
const btn = document.querySelector('.btn')

// btn could be null
btn.addEventListener('click', () => {})
