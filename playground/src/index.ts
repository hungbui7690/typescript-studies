/*
  Working With Type Predicates P1
  - pic

*/

interface Cat {
  name: string
  numLives: number
}

interface Dog {
  name: string
  breed: string
}

// (***)
function isCat(animal: Cat | Dog) {
  return (animal as Cat).numLives !== undefined
}

function makeNoise(animal: Cat | Dog): string {
  if (isCat(animal)) {
    animal // this function just work for human, but not for TS > hover, we can see animal is still union type
    return `Meow`
  }
}
