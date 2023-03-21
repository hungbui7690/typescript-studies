/*
  Discriminated Unions
  - pic
  - create common property 
    > each interface must have a field to discriminate
  
*/

interface Rooster {
  name: string
  weight: number
  age: number
  kind: 'rooster' // (***)
}
interface Cow {
  name: string
  weight: number
  age: number
  kind: 'cow' // (***)
}
interface Pig {
  name: string
  weight: number
  age: number
  kind: 'pig' // (***)
}

type FarmAnimal = Pig | Rooster | Cow

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
  }
}

const stevie: Rooster = {
  name: 'Stevie Chicks',
  weight: 2,
  age: 1.5,
  kind: 'rooster',
}

console.log(getAnimalSound(stevie))
