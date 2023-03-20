/*
  More On Function Parameter Annotations

*/

// define 3 params
const doSomething = (person: string, age: number, isFunny: boolean) => {}

// need to have exact number of parameters > otherwise, complain
doSomething('Chicken Face', 76, false)
