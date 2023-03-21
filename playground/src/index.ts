/*
  Exhaustiveness Checks With Never P2
  
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
    case 'sheep': // (***)
      animal
      return 'Baaaaa!'

    // no err > all cases are handled
    default:
      const _exhaustiveCheck: never = animal
      return _exhaustiveCheck
  }
}

const stevie: Rooster = {
  name: 'Stevie Chicks',
  weight: 2,
  age: 1.5,
  kind: 'rooster',
}

console.log(getAnimalSound(stevie))
