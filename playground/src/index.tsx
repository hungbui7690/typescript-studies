function getRandomElement<T>(list: T[]): T {
  const randomIndex = Math.floor(Math.random() * list.length)
  return list[randomIndex]
}

// convert to arrow function > need to add trailing comma > <T,>
const getRandomElementX = <T,>(list: T[]): T => {
  const randomIndex = Math.floor(Math.random() * list.length)
  return list[randomIndex]
}
