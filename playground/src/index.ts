/*
  Exhaustiveness Checks With Never P1
  
*/

interface Rooster {
  name: string
  weight: number
  age: number
  kind: 'rooster'
}
interface Cow {
  name: string
  weight: number
  age: number
  kind: 'cow'
}
interface Pig {
  name: string
  weight: number
  age: number
  kind: 'pig'
}

// (***) create a new interface
interface Sheep {
  name: string
  weight: number
  age: number
  kind: 'sheep'
}

type FarmAnimal = Pig | Rooster | Cow | Sheep

function getAnimalSound(animal: FarmAnimal) {
  switch (animal.kind) {
    case 'pig':
      animal
      return 'Oink!'
    case 'cow':
      animal
      return 'Mooo!'
    case 'rooster':
      animal
      return 'Cookoo!'

    // (***) we should never make it here, if we handle all cases correctly! > because it show error here > there should be some cases that we did not handle
    default:
      const shouldNeverGetHere: never = animal
  }
}

const stevie: Rooster = {
  name: 'Stevie Chicks',
  weight: 2,
  age: 1.5,
  kind: 'rooster',
}

console.log(getAnimalSound(stevie))
