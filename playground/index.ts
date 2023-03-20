/*
  Compiling to JavaScript
  - pic
  - there are too many settings > check ts playground

  > tsc --init
    > create tsconfig.json with many settings inside
*/

interface Chicken {
  breed: string
  eggsPerWeek: number
  name: string
}

const norma: Chicken = {
  breed: 'Silk',
  eggsPerWeek: 4,
  name: 'Norma',
}
