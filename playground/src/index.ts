/*
  Inferred Generic Type Parameters
  
*/

function getRandomElement<T>(list: T[]): T {
  const randomIndex = Math.floor(Math.random() * list.length)
  return list[randomIndex]
}

// infer > we don't need to give the type of argument > not always work
const str = getRandomElement(['a', 'b', 'c'])
console.log(str)

// in this case, if we don't specify the type > return the wrong type
const btn = document.querySelector('.btn')
