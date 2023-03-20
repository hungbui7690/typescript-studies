/*
  Working With Default Parameters

*/

// default parameter
function greet(person: string = 'stranger') {
  return `Hi there, ${person}`
}

greet()
greet('Joe')
