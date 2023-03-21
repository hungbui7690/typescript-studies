/*
  Changing Compilation Module System P1
  - this one, we run in browser 
    > Uncaught ReferenceError: exports is not defined
    > JS Engine does not know about CommonJS Module

  - one solution is to remove import/export 
  - create script tag for utils.js in index.html
    

*/

// import { add } from './utils'

const result = add(1, 2)
