/*
  Return Type Annotations P1
  - pic: function-return-type

*/

// in this case, ts infers the return type for us
function square(num: number) {
  return num * num
}

// infer return type as string
function greet(person: string) {
  return `Hi there, ${person}`
}

// (***) this case, we forget to have the return keyword > but ts doesn't catch it
function add(a: number, b: number) {
  a + b
}
add(1, 2)
