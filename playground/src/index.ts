/*
  Writing Another Generic Function
  - input [1,4,7] > return random number
  - input [true, false, true] > return random boolean
  - input [{}, {}, {}] <Cat> > return random Cat

*/

function getRandomElement<T>(list: T[]): T {
  const randomIndex = Math.floor(Math.random() * list.length)
  return list[randomIndex]
}

const num = getRandomElement<number>([1, 2, 3])
console.log(num)

const str = getRandomElement<string>(['a', 'b', 'c'])
console.log(str)

////////////////////////

interface Cat {
  name: string
  age: number
}

const cats = [
  { name: 'bic', age: 5 },
  { name: 'miu', age: 2 },
  { name: 'bu', age: 1 },
]

const cat = getRandomElement<Cat>(cats)
console.log(cat)
