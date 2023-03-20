/*
  Anonymous Function Contextual Typing
  - pic: function-anonymous-function

*/

const colors = ['red', 'orange', 'yellow']

// ts infers and knows right away that "color" === string
colors.map((color) => {
  color.toUpperCase()
  color.toFixed()
})
