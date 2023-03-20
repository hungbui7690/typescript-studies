/*
  The Lib Compiler Option P1
  - pic
  - "lib": [] > by default, TS knows about DOM 
    > if we uncomment, the list is empty > we need to add DOM to the list
  
  

*/

// hover onto "document" > type = Document object > JS knows about this type > right click: Type Definition > or Ctrl + click on "document"
const btn = document.querySelector('.btn')
console.log(btn)

// right now, TS does not know about this method > comes from later JS version
'hello'.replaceAll()
