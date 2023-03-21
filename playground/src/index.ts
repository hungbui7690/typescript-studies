/*
  Working With Type Predicates P2

*/

interface Cat {
  name: string
  numLives: number
}

interface Dog {
  name: string
  breed: string
}

// add return type > :animal is Cat
function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined
}

function makeNoise(animal: Cat | Dog): string {
  if (isCat(animal)) {
    animal // now, animal === Cat > TS can understand
    return `Meow`
  } else {
    animal // Dog
    return `Bark`
  }
}
