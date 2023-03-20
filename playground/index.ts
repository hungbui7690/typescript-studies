/*
  Function Parameter Annotations P2
  - pic

*/

// add type to parameter > hover > now, we cannot do nonsense stuff anymore
function square(num: number) {
  return num * num
}
square(3)
square(true) // we cannot do this anymore

// another example
function greet(person: string) {
  return `Hi there, ${person}!`
}
